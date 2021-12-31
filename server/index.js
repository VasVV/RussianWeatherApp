
const express = require("express");
const path = require("path");
const cors = require("cors");
const bp = require('body-parser');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const axios = require('axios');

const app = express();



app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(cors());

app.use('/RussianWeatherApp', express.static(path.join(__dirname, '../weathermapru/build')));

require('dotenv').config();

const PORT = process.env.PORT || 3001;

const headers = {
    'X-Yandex-API-Key': process.env.API_KEY,
  }

app.post('/recieveweather', (req, res) => {
    
    let lat = req.body.lat;
    let lon = req.body.lon;

    const requestOptions = {
    method: 'get',
    url: `https://api.weather.yandex.ru/v2/forecast?lat=${lat}&lon=${lon}&extra=true`,
    headers,
    };

    axios(config)
    .then(function (response) {
      JSON.stringify(response.data);
    })
    .then(result => res.send(resulst))
    .catch(function (error) {
      console.log(error);
    });

    // fetch(`https://api.weather.yandex.ru/v2/forecast?lat=${lat}&lon=${lon}&extra=true`, requestOptions)
    // .then(response => response.text())
    // .then(result => res.send(result))
    // .catch(error => console.log('error', error));
});

app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../weathermapru/build', 'index.html'));
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });