const actions = require('../actions/index');
const store = require('../store');
const update = require('react-addons-update');
const combineReducers = require('redux').combineReducers;

const stateToAbbr = require('../state-to-abbr');

const initialState = {
    coords: {
        lat: null,
        long: null,
        city: null,
        state: null,
        stateAbbr: null
    },
    error: null,
    weather: {
        main: 'Clear',
        currently: {
            summary: null,
            temperature: null,
            humidity: null
        },
        forecast: {
            hours: [], // Hours and days should be filled with objects identical to this.currently.
            days: []   // Hours and days should be filled with objects identical to this.currently.
        }
    },
    popularCities: {
        newYorkCity: {
            lat: 40.712784,
            long: -74.005941,
            city: 'New York',
            state: 'New York',
            stateAbbr: 'ny'
        },
        losAngeles: {
            lat: 34.052234,
            long: -118.243685,
            city: 'Los Angeles',
            state: 'California',
            stateAbbr: 'ca'
        },
        chicago: {
            lat: 41.878114,
            long: -87.629798,
            city: 'Chicago',
            state: 'Illinois',
            stateAbbr: 'il'
        },
        seattle: {
            lat: 47.606209,
            long: -122.332071,
            city: 'Seattle',
            state: 'Washington',
            stateAbbr: 'wa'
        },
        washingtonDC: {
            lat: 38.907192,
            long: -77.036871,
            city: 'Washington',
            state: 'District of Columbia',
            stateAbbr: 'md'
        },
        dallas: {
            lat: 32.776664,
            long: -96.796988,
            city: 'Dallas',
            state: 'Texas',
            stateAbbr: 'tx'
        },
        miami: {
            lat: 25.761680,
            long: -80.191790,
            city: 'Miami',
            state: 'Florida',
            stateAbbr: 'fl'
        },
        philadelphia: {
            lat: 39.952584,
            long: -75.165222,
            city: 'Philadelphia',
            state: 'Pennsylvania',
            stateAbbr: 'pa'
        }
    }
};

const errorReducer = (state = initialState.error, action) => {
    if (action.type === actions.resetError) {
        return update(state, {$set: null});
    } else if (
        action.type === actions.GET_FORECAST_DAILY_ERROR ||
        action.type === actions.GET_LOC_ERROR ||
        action.type === actions.GET_CURR_WEATHER_ERROR ||
        action.type === actions.GET_FORECAST_HOURLY_ERROR ||
        action.type === actions.GLOBAL_ERROR
    ) {
        console.log('An error occurred: ' + action.err);
        return update(state, {$set: action.err});
    }
    
    return state;
};

const coordsReducer = (state = initialState.coords, action) => {
    if (action.type === actions.GET_LOC_SUCCESS) {
        return update(state, {
            lat: {$set: action.lat},
            long: {$set: action.long},
            city: {$set: action.city},
            state: {$set: action.state},
            stateAbbr: {$set: stateToAbbr(action.state, 'abbr')}
        });
    } 
    
    return state;
};

const weatherReducer = (state = initialState.weather, action) => {
    if (action.type === actions.GET_CURR_WEATHER_SUCCESS) {
        return update(state, {
            main: {$set: action.data.weather[0].main},
            currently: {
                summary: {$set: action.data.weather[0].description},
                temperature: {$set: action.data.main.temp},
                humidity: {$set: action.data.main.humidity}
            }
        });
    } else if (action.type === actions.GET_FORECAST_HOURLY_SUCCESS) {
        let hours = [];
        // Only get the next 15 hours (3 hour increments * 5 times).
        for (let i = 0; i < 5; i++) {
            hours[i] = {
                summary: action.data.list[i].weather[0].description,
                temperature: action.data.list[i].main.temp,
                humidity: action.data.list[i].main.humidity
            };
        }
        return update(state, {
           forecast: {
               hours: {$set: hours}
           }
        });
    } else if (action.type === actions.GET_FORECAST_DAILY_SUCCESS) {
        let days = [];
        // Only get the next 5 days.
        for (let i = 0; i < 5; i++) {
            days[i] = {
                summary: action.data.list[i].weather[0].description,
                temperature: action.data.list[i].temp.day,
                humidity: action.data.list[i].humidity
            };
        }
        return update(state, {
           forecast: {
               days: {$set: days}
           }
        });
    }
    
    return state;
};

const popularCitiesReducer = (state = initialState.popularCities, action) => {
    return state;
};

const reducer = combineReducers({
    coords: coordsReducer,
    error: errorReducer,
    weather: weatherReducer,
    popularCities: popularCitiesReducer
});

exports.reducer = reducer;