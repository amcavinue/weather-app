var fetch = require('isomorphic-fetch');

function getWeather(zip) {
    return function(dispatch) {
        return fetch('/weather')
        .then(function(response) {
            // If any response other than successful.
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data, 19);
            return dispatch(
                getWeatherSuccess(data)
            );
        })
        .catch(function(error) {
            console.log(error, 19);
            return dispatch(
                getWeatherError(error)
            );
        });
    };
}

var GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
function getWeatherSuccess(data) {
    return {
        type: GET_WEATHER_SUCCESS,
        data: data
    };
}

var GET_WEATHER_ERROR = 'GET_WEATHER_ERROR';
function getWeatherError(err) {
    return {
        type: GET_WEATHER_ERROR,
        err: err
    };
}

var STORE_ZIP = 'STORE_ZIP';
function storeZip(zip) {
    return {
        type: STORE_ZIP,
        zip: zip
    };
}

exports.getWeather = getWeather;
exports.GET_WEATHER_SUCCESS = GET_WEATHER_SUCCESS;
exports.getWeatherSuccess = getWeatherSuccess;
exports.GET_WEATHER_ERROR = GET_WEATHER_ERROR;
exports.getWeatherError = getWeatherError;
exports.STORE_ZIP = STORE_ZIP;
exports.storeZip = storeZip;