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
    weatherData = {
        currently: {
            summary: data.currently.summary,
            precipProbability: data.currently.precipProbability,
            temperature: data.currently.temperature,
            feelsLike: data.currently.apparentTemperature
        },
        forecast: {
            hourly: {
                summary: data.hourly.summary,
                hours: [
                    {
                        summary: data.hourly.data[0].summary,
                        precipProbability: data.hourly.data[0].precipProbability,
                        temperature: data.hourly.data[0].temperature,
                        feelsLike: data.hourly.data[0].apparentTemperature
                    },
                    {
                        summary: data.hourly.data[1].summary,
                        precipProbability: data.hourly.data[1].precipProbability,
                        temperature: data.hourly.data[1].temperature,
                        feelsLike: data.hourly.data[1].apparentTemperature
                    },
                    {
                        summary: data.hourly.data[2].summary,
                        precipProbability: data.hourly.data[2].precipProbability,
                        temperature: data.hourly.data[2].temperature,
                        feelsLike: data.hourly.data[2].apparentTemperature
                    },
                    {
                        summary: data.hourly.data[3].summary,
                        precipProbability: data.hourly.data[3].precipProbability,
                        temperature: data.hourly.data[3].temperature,
                        feelsLike: data.hourly.data[3].apparentTemperature
                    },
                    {
                        summary: data.hourly.data[4].summary,
                        precipProbability: data.hourly.data[4].precipProbability,
                        temperature: data.hourly.data[4].temperature,
                        feelsLike: data.hourly.data[4].apparentTemperature
                    }
                ]
            },
            daily: {
                summary: data.daily.summary,
                days: [
                    {
                        summary: data.daily.data[0].summary,
                        precipProbability: data.daily.data[0].precipProbability,
                        temperature: data.daily.data[0].temperature,
                        feelsLike: data.daily.data[0].apparentTemperature
                    },
                    {
                        summary: data.daily.data[1].summary,
                        precipProbability: data.daily.data[1].precipProbability,
                        temperature: data.daily.data[1].temperature,
                        feelsLike: data.daily.data[1].apparentTemperature
                    },
                    {
                        summary: data.daily.data[2].summary,
                        precipProbability: data.daily.data[2].precipProbability,
                        temperature: data.daily.data[2].temperature,
                        feelsLike: data.daily.data[2].apparentTemperature
                    },
                    {
                        summary: data.daily.data[3].summary,
                        precipProbability: data.daily.data[3].precipProbability,
                        temperature: data.daily.data[3].temperature,
                        feelsLike: data.daily.data[3].apparentTemperature
                    },
                    {
                        summary: data.daily.data[4].summary,
                        precipProbability: data.daily.data[4].precipProbability,
                        temperature: data.daily.data[4].temperature,
                        feelsLike: data.daily.data[4].apparentTemperature
                    },
                    {
                        summary: data.daily.data[5].summary,
                        precipProbability: data.daily.data[5].precipProbability,
                        temperature: data.daily.data[5].temperature,
                        feelsLike: data.daily.data[5].apparentTemperature
                    },
                    {
                        summary: data.daily.data[6].summary,
                        precipProbability: data.daily.data[6].precipProbability,
                        temperature: data.daily.data[6].temperature,
                        feelsLike: data.daily.data[6].apparentTemperature
                    }
                ]
            }
        }
    }
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