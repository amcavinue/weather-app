var fetch = require('isomorphic-fetch');

function getCurrWeather(lat, long) {
    return function(dispatch) {
        var init = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        };
        var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + 
            lat + '&lon=' + long + '&appid=877900e60dce2e112e618c4047774060&units=imperial';
        
        return fetch(url, init)
        .then(function(response) {
            // If any response other than successful.
            if (response.status < 200 || response.status >= 300) {
                let error = new Error(response.statusText)
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
                getCurrWeatherSuccess(data)
            );
        })
        .catch(function(error) {
            return dispatch(
                getCurrWeatherError(error)
            );
        });
    };
}

var GET_CURR_WEATHER_SUCCESS = 'GET_CURR_WEATHER_SUCCESS';
function getCurrWeatherSuccess(data) {
    return {
        type: GET_CURR_WEATHER_SUCCESS,
        data: data
    };
}

var GET_CURR_WEATHER_ERROR = 'GET_CURR_WEATHER_ERROR';
function getCurrWeatherError(err) {
    return {
        type: GET_CURR_WEATHER_ERROR,
        err: err
    };
}

function getForecastHourly(lat, long) {
    return function(dispatch) {
        var init = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        };
        var url = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + 
            lat + '&lon=' + long + '&appid=877900e60dce2e112e618c4047774060&units=imperial';
        
        return fetch(url, init)
        .then(function(response) {
            // If any response other than successful.
            if (response.status < 200 || response.status >= 300) {
                let error = new Error(response.statusText)
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
                getForecastHourlySuccess(data)
            );
        })
        .catch(function(error) {
            return dispatch(
                getForecastHourlyError(error)
            );
        });
    };
}

var GET_FORECAST_HOURLY_SUCCESS = 'GET_FORECAST_HOURLY_SUCCESS';
function getForecastHourlySuccess(data) {
    return {
        type: GET_FORECAST_HOURLY_SUCCESS,
        data: data
    };
}

var GET_FORECAST_HOURLY_ERROR = 'GET_FORECAST_HOURLY_ERROR';
function getForecastHourlyError(err) {
    return {
        type: GET_FORECAST_HOURLY_ERROR,
        err: err
    };
}

function getForecastDaily(lat, long) {
    return function(dispatch) {
        var init = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        };
        var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + 
            lat + '&lon=' + long + '&appid=877900e60dce2e112e618c4047774060&units=imperial';
        
        return fetch(url, init)
        .then(function(response) {
            // If any response other than successful.
            if (response.status < 200 || response.status >= 300) {
                let error = new Error(response.statusText)
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
                getForecastDailySuccess(data)
            );
        })
        .catch(function(error) {
            return dispatch(
                getForecastDailyError(error)
            );
        });
    };
}

var GET_FORECAST_DAILY_SUCCESS = 'GET_FORECAST_DAILY_SUCCESS';
function getForecastDailySuccess(data) {
    return {
        type: GET_FORECAST_DAILY_SUCCESS,
        data: data
    };
}

var GET_FORECAST_DAILY_ERROR = 'GET_FORECAST_DAILY_ERROR';
function getForecastDailyError(err) {
    return {
        type: GET_FORECAST_DAILY_ERROR,
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
                let error = new Error(response.statusText)
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

exports.getCurrWeather = getCurrWeather;
exports.GET_CURR_WEATHER_SUCCESS = GET_CURR_WEATHER_SUCCESS;
exports.getCurrWeatherSuccess = getCurrWeatherSuccess;
exports.GET_CURR_WEATHER_ERROR = GET_CURR_WEATHER_ERROR;
exports.getCurrWeatherError = getCurrWeatherError;

exports.getForecastHourly = getForecastHourly;
exports.GET_FORECAST_HOURLY_SUCCESS = GET_FORECAST_HOURLY_SUCCESS;
exports.getForecastHourlySuccess = getForecastHourlySuccess;
exports.GET_FORECAST_HOURLY_ERROR = GET_FORECAST_HOURLY_ERROR;
exports.getForecastHourlyError = getForecastHourlyError;

exports.getForecastDaily = getForecastDaily;
exports.GET_FORECAST_DAILY_SUCCESS = GET_FORECAST_DAILY_SUCCESS;
exports.getForecastDailySuccess = getForecastDailySuccess;
exports.GET_FORECAST_DAILY_ERROR = GET_FORECAST_DAILY_ERROR;
exports.getForecastDailyError = getForecastDailyError;

exports.getLoc = getLoc;
exports.GET_LOC_SUCCESS = GET_LOC_SUCCESS;
exports.getLocSuccess = getLocSuccess;
exports.GET_LOC_ERROR = GET_LOC_ERROR;
exports.getLocError = getLocError;