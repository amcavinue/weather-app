var fetch = require('isomorphic-fetch');

function getWeather(lat, long) {
    return function(dispatch) {
        return fetch('/weather/' + lat + '/' + long)
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
            return dispatch(
                getWeatherSuccess(data)
            );
        })
        .catch(function(error) {
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

function getLoc() {
    return function(dispatch) {
        var init = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        };
        
        return fetch('//ipinfo.io/json', init)
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
            var location = data.loc.match(/-?\d+(\.\d+)?/gi);
            location = [Number(location[0]), Number(location[1])];
            return dispatch(
                getLocSuccess(location[0], location[1])
            );
        })
        .catch(function(error) {
            return dispatch(
                getLocError(error)
            );
        });
    };
}

var GET_LOC_SUCCESS = 'GET_LOC_SUCCESS';
function getLocSuccess(lat, long) {
    return {
        type: GET_LOC_SUCCESS,
        lat: lat,
        long: long
    }
}

var GET_LOC_ERROR = 'GET_LOC_ERROR';
function getLocError(err) {
    return {
        type: GET_LOC_ERROR,
        err: err
    }
}

exports.getWeather = getWeather;
exports.GET_WEATHER_SUCCESS = GET_WEATHER_SUCCESS;
exports.getWeatherSuccess = getWeatherSuccess;
exports.GET_WEATHER_ERROR = GET_WEATHER_ERROR;
exports.getWeatherError = getWeatherError;
exports.getLoc = getLoc;
exports.GET_LOC_SUCCESS = GET_LOC_SUCCESS;
exports.getLocSuccess = getLocSuccess;
exports.GET_LOC_ERROR = GET_LOC_ERROR;
exports.getLocError = getLocError;