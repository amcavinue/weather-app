var actions = require('../actions/index');
var store = require('../store');
var update = require('react-addons-update');

var initialState = {
    lat: null,
    long: null,
    weather: null
};

var reducer = function(state, action) {
    state = state || initialState;
    
    if (action.type === actions.GET_WEATHER_SUCCESS) {
        return update(state, {
            weather: {$set: action.data}
        });
    } else if (action.type === actions.GET_WEATHER_ERROR) {
        console.log('An error occurred: ' + action.err);
        return state;
    } else if (action.type === actions.GET_LOC_SUCCESS) {
        return update(state, {
            lat: {$set: action.lat},
            long: {$set: action.long}
        });
    } else if (action.type === actions.GET_LOC_ERROR) {
        console.log('And error occurred: ' + action.err);
        return state;
    }
    
    return state;
}

exports.reducer = reducer;