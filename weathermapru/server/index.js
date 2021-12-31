
const express = require("express");
const path = require("path");
const cors = require("cors");
const bp = require('body-parser');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


const app = express();



app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(path.resolve(__dirname, '../weathermapru/build')));

require('dotenv').config();

const PORT = process.env.PORT || 3001;

const headers = {
    'X-Yandex-API-Key': process.env.API_KEY,
  }

app.post('/recieveweather', (req, res) => {
    
    let lat = req.body.lat;
    let lon = req.body.lon;
    

    const requestOptions = {
    method: 'GET',
    headers,
    redirect: 'follow'
    };

    fetch(`https://api.weather.yandex.ru/v2/forecast?lat=${lat}&lon=${lon}&extra=true`, requestOptions)
    .then(response => response.text())
    .then(result => res.send(result))
    .catch(error => console.log('error', error));
})

app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../weathermapru/build', 'index.html'));
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });