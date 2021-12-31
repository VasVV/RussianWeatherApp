/* external imports  */
require('dotenv').config();
const express = require("express");
const app = express();
const cors = require('cors');
const bp = require('body-parser');
const {resolve,join} = require('path');
const axios = require('axios')

const buildDir= resolve(__dirname, '../weathermapru/build')
const PORT = process.env.PORT || 3001;
const headers = { 'X-Yandex-API-Key': process.env.API_KEY }
app.use(cors());
app.use('/RussianWeatherApp', express.static(buildDir));

/* Routes */
app.get('/', (req, res) => res.sendFile(join(buildDir, 'index.html')));

/* if no route matches */
app.get('*', (req,res) => res.status(404).send("Sorry we couldn't find that page"))

/* Post */ 

/* parse application/json */
app.use(bp.json());
/* parse application/x-www-form-urlencoded */
app.use(bp.urlencoded({ extended: false }));

app.post('/receiveweather', (req, res, next) => {
    
    let lat = req.body.lat;
    let lon = req.body.lon;

    const requestOptions = {
    method: 'get',
    url: `https://api.weather.yandex.ru/v2/forecast?lat=${lat}&lon=${lon}&extra=true`,
    headers,
    };

    axios(requestOptions)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
      next(error)
    });

});

app.listen(PORT, ()=>console.log(`listening at ${PORT}`))
