var actions = require('../actions/index');
var store = require('../store');
var update = require('react-addons-update');

const initialState = {
    lat: null,
    long: null,
    error: null,
    weather: {
        currently: {
            summary: null,
            temperature: null,
            humidity: null
        },
        forecast: {
            hours: [], // Hours and days should be filled with objects identical to this.currently.
            days: []   // Hours and days should be filled with objects identical to this.currently.
        }
    }
};

var reducer = (state = initialState, action) => {
    if (action.type === actions.GET_CURR_WEATHER_SUCCESS) {
        return update(state, {
            weather: {
                currently: {
                    summary: {$set: action.data.weather[0].description},
                    temperature: {$set: action.data.main.temp},
                    humidity: {$set: action.data.main.humidity}
                }
            }
        });
    } else if (action.type === actions.GET_FORECAST_HOURLY_SUCCESS) {
        var hours = [];
        // Only get the next 15 hours (3 hour increments * 5 times).
        for (let i = 0; i < 5; i++) {
            hours[i] = {
                summary: action.data.list[i].weather[0].description,
                temperature: action.data.list[i].main.temp,
                humidity: action.data.list[i].main.humidity
            };
        }
        return update(state, {
           weather: {
               forecast: {
                   hours: {$set: hours}
               }
           } 
        });
    } else if (action.type === actions.GET_FORECAST_DAILY_SUCCESS) {
        var days = [];
        // Only get the next 5 days.
        for (let i = 0; i < 5; i++) {
            days[i] = {
                summary: action.data.list[i].weather[0].description,
                temperature: action.data.list[i].temp.day,
                humidity: action.data.list[i].humidity
            };
        }
        return update(state, {
           weather: {
               forecast: {
                   days: {$set: days}
               }
           } 
        });
    } else if (action.type === actions.GET_LOC_SUCCESS) {
        return update(state, {
            lat: {$set: action.lat},
            long: {$set: action.long}
        });
    } else if (
        action.type === actions.GET_FORECAST_DAILY_ERROR ||
        action.type === actions.GET_LOC_ERROR ||
        action.type === actions.GET_CURR_WEATHER_ERROR ||
        action.type === actions.GET_FORECAST_HOURLY_ERROR ||
        action.type === actions.GLOBAL_ERROR
    ) {
        console.log('An error occurred: ' + action.err);
        return update(state, {
            error: {$set: 'An error occurred while loading data for your area. Please reload the page or try again later.'}
        });
    }
    
    return state;
}

exports.reducer = reducer;