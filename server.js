var express = require('express');
var util = require('util');
var path = require('path');
var bodyParser = require('body-parser');
var request = require('request');

var app = express();
app.use(express.static('build'));  // Serve the build folder.
app.use(bodyParser.json()); // Used for getting parameters in post requests.

/**
 * Routes
 */
 app.get('/weather', function(req, res) {
    var weatherData, err;
    getWeather(req.zip, function(err, weatherData) {
        if (err) {
            res.status(400).json(err);
        }
        res.status(200).json(weatherData);
    });
});

/**
 * Helper Functions
 */
function getWeather(zip, callback) {
    var query = 'select * from weather.forecast where (location =' + zip + ')';
    var url = 'http://query.yahooapis.com/vi/public/yql?q=' + encodeURIComponent(query) + '&format=json';
    
    request('http://www.google.com', function (error, response, body) {
        if (error) {
            callback(null, error);
        }
        callback(body, null);
    });
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