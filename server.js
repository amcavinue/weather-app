var express = require('express');
var util = require('util');
var path = require('path');
var bodyParser = require('body-parser');
var request = require('request');

var app = express();
app.use(express.static('build'));  // Serve the build folder.
app.use(bodyParser.json()); // Used for getting parameters in post requests.

/**
 * Initial weather data structure.
 */
var weatherData = {
    currently: {
        summary: null,
        precipProbability: null,
        temperature: null,
        feelsLike: null
    },
    forecast: {
        hourly: {
            summary: null,
            hours: [] // Hours and days should be filled with objects identical to this.currently.
        },
        daily: {
            summary: null,
            days: [] // Hours and days should be filled with objects identical to this.currently.
        }
    }
}

/**
 * Helper Functions
 */
function getWeather(lat, long, callback) {
    var url = 'https://api.darksky.net/forecast/df481b0391bf8f92395f9ec35c3b2881/' + lat + ',' + long;
    request(url, function (error, response, body) {
        if (error) {
            return callback(error, null);
        }
        return callback(null, body);
    });
}

/*
Converts the data from whatever api into the data model 
above, so the front end always recieves the same data.
*/
function convertData(data) {
    console.log(data, 51);
    
    weatherData.currently = {
            summary: data.currently.summary,
            precipProbability: data.currently.precipProbability,
            temperature: data.currently.temperature,
            feelsLike: data.currently.apparentTemperature
        };
    
    weatherData.forecast.hourly.summary = data.forecast.hourly.summary;
    weatherData.forecast.hourly.hours = data.forecast.hourly.data.map(function(hourlyData) {
        return {
            summary: hourlyData.summary,
            precipProbability: hourlyData.precipProbability,
            temperature: hourlyData.temperature,
            feelsLike: hourlyData.apparentTemperature
        };
    });
    
    weatherData.forecast.daily.summary = data.forecast.daily.summary;
    weatherData.forecast.daily.days = data.forecast.daily.data.map(function(dailyData) {
        return {
            summary: dailyData.summary,
            precipProbability: dailyData.precipProbability,
            temperature: dailyData.temperature,
            feelsLike: dailyData.apparentTemperature
        };
    });
}
 
 /**
 * Routes
 */
 app.get('/weather/:lat/:long', function(req, res) {
    getWeather(req.params.lat, req.params.long, function(err, data) {
        if (err) {
            return res.status(400).json(err);
        }
        convertData(JSON.parse(data));
        return res.status(200).json(weatherData);
    });
});
 
/**
 * Run the server
 */
if (require.main === module) {
    app.listen(process.env.PORT || 8080, function() {
        console.log('Listening on: ' + process.env.PORT || 8080);
    });
};

/**
 * Exports
 */
exports.app = app;