var fetch = require('isomorphic-fetch');

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

function getWeather(zip) {
    return function(dispatch) {
        debugger;
        var query = 'select * from weather.forecast where (location =' + zip + ')';
        var url = 'http://query.yahooapis.com/vi/public/yql?q=' + encodeURIComponent(query) + '&format=json';
        debugger;
        console.log(url, 23);
        return fetch(url)
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
            debugger;
            return response.json();
        })
        .then(function(data) {
            debugger;
            return dispatch(getWeatherSuccess(data));
        })
        .catch(function(err) {
            debugger;
            return dispatch(getWeatherError(err));
        });
    }
}

exports.getWeather = getWeather;
exports.GET_WEATHER_SUCCESS = GET_WEATHER_SUCCESS;
exports.getWeatherSuccess = getWeatherSuccess;
exports.GET_WEATHER_ERROR = GET_WEATHER_ERROR;
exports.getWeatherError = getWeatherError;