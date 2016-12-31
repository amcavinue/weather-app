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
    
}

/**
 * Routes
 */
 app.get('/weather/:lat/:long', function(req, res) {
    getWeather(req.params.lat, req.params.long, function(err, data) {
        if (err) {
            return res.status(400).json(err);
        }
        convertData(data);
        return res.status(200).json(weatherData);
    });
});

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
    weatherData = data;
}
 
/**
 * Run the server
 */
if (require.main === module) {
    app.listen(8080, function() {
        console.log('Listening on localhost');
    });
};

/**
 * Exports
 */
exports.app = app;