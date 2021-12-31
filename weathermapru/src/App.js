import './App.css';
import { useState, useEffect } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  useZoomPan
} from "react-simple-maps";

import axios from 'axios';

import CITIES from './russian-cities';

const geoUrl = 'https://raw.githubusercontent.com/Kreozot/russian-geo-data/master/geo.json';

const width = 1024;
const height = 768;

const CustomZoomableGroup = ({ children, ...restProps }) => {
  const { mapRef, transformString, position } = useZoomPan(restProps);
  return (
    <g ref={mapRef}>
      <rect width={width} height={height} fill="transparent" />
      <g transform={transformString}>{children(position)}</g>
    </g>
  );
};

function App() {

  const [weather, setWeather] = useState([]);
  const [position, setPosition] = useState({ coordinates: [56, 35], zoom: 2 });
  const [showOnZoom, setShowOnZoom] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleZoomIn = () => {
    if (position.zoom > 4) {
      setShowOnZoom(true)
    }
    if (position.zoom > 8) {
      return;
    }
    setPosition(pos => ({ ...pos, zoom: pos.zoom + 1 }));
  }

  const handleZoomOut = () => {
    if (position.zoom < 2) {
      return;
    } 
    if (position.zoom <= 4) {
      setShowOnZoom(false);
    }
    setPosition(pos => ({ ...pos, zoom: pos.zoom - 1 }));
  }

  const handleMoveEnd = (position) => {
    setPosition(position);
  }

  const weatherRequest = async(city, lat, lon) => {
    let data = {lat, lon};
    try {
      const response = await axios.post('/recieveweather', data);
      console.log(response);
      let curr = response.data.fact;
      let tomorrow = response.data.forecasts[1];
      setWeather(prevState => [...prevState, {city, curr, tomorrow, opened: false}]); 
    } catch (err) {
      console.log(err);
    }
  }

  const getWeather = () => CITIES.forEach(e => weatherRequest(e.name, e.coordinates[1], e.coordinates[0]));

  const handleClick = (name) => {
    let newArr = [...weather];
    newArr.map((e) => name === e.city ? e.opened = true : e.opened = false );
    setClicked(true);
    setWeather(newArr);
   }

   const cloudness = cloudness => {
     switch(cloudness) {
       case 0:
         return 'ясно';
       case 0.25:
         return 'малооблачно';
       case 0.5:
         return 'облачно с прояснениями';
       case 0.75:
         return 'облачно с прояснениями';
       default:
         return 'пасмурно';
     }
   }

  

  useEffect(() => {
    getWeather();
    setLoaded(true)
  }, [])

  

  return (
    <div className="App">
      {loaded ?
      <>
      <div className="map">
        <ComposableMap 
          projection="geoMercator" 
          width={width} 
          height={height}>
        <CustomZoomableGroup 
          center={position.coordinates} 
          zoom={position.zoom} 
          center={position.coordinates} 
          onMoveEnd={handleMoveEnd}>
            {position => (
              <>
                <Geographies 
                  geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map(geo => (
                      <Geography 
                        key={geo.rsmKey} 
                        geography={geo} />
                    ))
                  }
                </Geographies>
            {CITIES.map(({ name, coordinates, population }) => (
              <>
                <Marker key={name} coordinates={coordinates} onClick={() => handleClick(name)}>
                  <g>
                    {population > 1000000 ? 
                      <text  
                        x="1" 
                        y="-2" 
                        fontFamily="Verdana" 
                        fontSize={10/position.k} 
                        fill="red" 
                        className={showOnZoom ? 'text-show' : 'text-hide'}
                        >
                        <tspan x="1">Температура сейчас: {showOnZoom ? weather.find(e => e.city === name).curr.temp : ''}</tspan>
                        <tspan x="1" y="0">Облачность: {showOnZoom ? cloudness(weather.find(e => e.city === name).curr.cloudness) : ''}</tspan>
                      </text>
                          : ''}
                      <text 
                        x="1" 
                        y="-2" 
                        fontFamily="Verdana" 
                        fontSize={10/position.k} 
                        fill="red" 
                        className={clicked && weather.find(e => e.city === name).opened ? 'text-show' : 'text-hide'}>
                        <tspan x="1">Температура сейчас: {clicked && weather.find(e => e.city === name).opened ?  weather.find(e => e.city === name).curr.temp : ''} </tspan>
                        <tspan x="1" y={6/position.k}> Температура завтра: {clicked && weather.find(e => e.city === name).opened ?  weather.find(e => e.city === name).tomorrow.parts.day.temp_avg : ''} </tspan>
                      </text>
                  </g>
                <circle r={3 / position.k} fill="#F53" className="city-circle"/>
                <text
                  textAnchor="middle"
                  fontSize={10/position.k}
                  y={4}
                  style={{ fontFamily: "system-ui", fill: "#5D5A6D", }}
                >
                  {name}
                </text>
              </Marker>
          </>
            ))}
          </>
            )}
        </CustomZoomableGroup>
      </ComposableMap>
      </div>
      <div className="controls">
        <button onClick={handleZoomIn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
        <button onClick={handleZoomOut}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </div>
      </>
      : 'Loading...'}
    </div>
  );
}

export default App;
