var YQL = require('yql');

var GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
function getWeatherSuccess(data) {
    return {
        type: GET_WEATHER_SUCCESS,
        data: data
    };
}

var GET_WEATHER_ERROR = 'GET_WEATHER_ERROR';
function getWeatherError() {
    return {
        type: GET_WEATHER_ERROR
    };
}

function getWeather(zip) {
    return function(dispatch) {
        var query = new YQL('select * from weather.forecast where (location =' + zip + ')');

        query.exec(function(err, data) {
            if (err) {
                return dispatch(getWeatherError());
            }
            return dispatch(getWeatherSuccess(data));
        });

    }
}

exports.getWeather = getWeather;
exports.GET_WEATHER_SUCCESS = GET_WEATHER_SUCCESS;
exports.getWeatherSuccess = getWeatherSuccess;
exports.GET_WEATHER_ERROR = GET_WEATHER_ERROR;
exports.getWeatherError = getWeatherError;