var actions = require('../actions/index');
var update = require('react-addons-update');

var initialState = {
    zip: null,
    weather: null
};

var reducer = function(state, action) {
    state = state || initialState;
    
    if (action.type === actions.GET_WEATHER) {
        return update(state, {
            weather: {$set: action.data}
        });
    } else if (action.type === actions.GET_WEATHER_ERROR) {
        console.log('An error occurred: ' + action.err);
        return state;
    }
    
    return state;
}

exports.reducer = reducer;