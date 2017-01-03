require('babel-polyfill');
var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;

var actions = require('./actions/index');
var store = require('./store');
var WeatherApp = require('./components/weather-app');

document.addEventListener('DOMContentLoaded', function() {
    store.dispatch(actions.getLoc())
    .then(function() {
        var state = store.getState();
        return store.dispatch(actions.getWeather(state.lat, state.long));
    }).then(function() {
        ReactDOM.render(
            <Provider store={store}>
                <WeatherApp />
            </Provider>,
            document.getElementById('app')
        );
    });
});