const fetch = require('isomorphic-fetch');
const store = require('../store');

function getCurrWeather(lat, long) {
    if (typeof lat !== 'number' && typeof long !== 'number') {
        return store.dispatch(globalError('Invalid input for latitude and longitude in getCurrWeather.'));
    }
    
    return (dispatch) => {
        const init = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        };
        const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=877900e60dce2e112e618c4047774060&units=imperial`;
        
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

const GET_CURR_WEATHER_SUCCESS = 'GET_CURR_WEATHER_SUCCESS';
function getCurrWeatherSuccess(data) {
    return {
        type: GET_CURR_WEATHER_SUCCESS,
        data: data
    };
}

const GET_CURR_WEATHER_ERROR = 'GET_CURR_WEATHER_ERROR';
function getCurrWeatherError(err) {
    return {
        type: GET_CURR_WEATHER_ERROR,
        err: err
    };
}

function getForecastHourly(lat, long) {
    if (typeof lat !== 'number' && typeof long !== 'number') {
        return store.dispatch(globalError('Invalid input for latitude and longitude in getForecastHourly.'));
    }
    
    return (dispatch) => {
        const init = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        };
        const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=877900e60dce2e112e618c4047774060&units=imperial`;
        
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

const GET_FORECAST_HOURLY_SUCCESS = 'GET_FORECAST_HOURLY_SUCCESS';
function getForecastHourlySuccess(data) {
    return {
        type: GET_FORECAST_HOURLY_SUCCESS,
        data: data
    };
}

const GET_FORECAST_HOURLY_ERROR = 'GET_FORECAST_HOURLY_ERROR';
function getForecastHourlyError(err) {
    return {
        type: GET_FORECAST_HOURLY_ERROR,
        err: err
    };
}

function getForecastDaily(lat, long) {
    if (typeof lat !== 'number' && typeof long !== 'number') {
        return store.dispatch(globalError('Invalid input for latitude and longitude in getForecastDaily.'));
    }
    
    return (dispatch) => {
        const init = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        };
        const url = `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&appid=877900e60dce2e112e618c4047774060&units=imperial`;
        
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

const GET_FORECAST_DAILY_SUCCESS = 'GET_FORECAST_DAILY_SUCCESS';
function getForecastDailySuccess(data) {
    return {
        type: GET_FORECAST_DAILY_SUCCESS,
        data: data
    };
}

const GET_FORECAST_DAILY_ERROR = 'GET_FORECAST_DAILY_ERROR';
function getForecastDailyError(err) {
    return {
        type: GET_FORECAST_DAILY_ERROR,
        err: err
    };
}

function getLoc() {
    return (dispatch) => {
        const init = {
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
            let location = data.loc.match(/-?\d+(\.\d+)?/gi);
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

const GET_LOC_SUCCESS = 'GET_LOC_SUCCESS';
function getLocSuccess(lat, long) {
    return {
        type: GET_LOC_SUCCESS,
        lat: lat,
        long: long
    };
}

const GET_LOC_ERROR = 'GET_LOC_ERROR';
function getLocError(err) {
    return {
        type: GET_LOC_ERROR,
        err: err
    };
}

const GLOBAL_ERROR = 'GLOBAL_ERROR';
function globalError(err) {
    return {
        type: GLOBAL_ERROR,
        err: err
    };
}

const RESET_ERROR = 'RESET_ERROR';
function resetError() {
    return {
        type: RESET_ERROR
    };
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

exports.GLOBAL_ERROR = GLOBAL_ERROR;
exports.globalError = globalError;

exports.RESET_ERROR = RESET_ERROR;
exports.resetError = resetError;