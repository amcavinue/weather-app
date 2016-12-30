var express = require('express');
var util = require('util');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('build'));  // Serve the build folder.
app.use(bodyParser.json()); // Used for getting parameters in post requests.

/**
 * Routes
 */

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