require('babel-polyfill');
var React = require('react');
var ReactDOM = require('react-dom');

var actions = require('./actions/index');
var store = require('./store');

document.addEventListener('DOMContentLoaded', function() {
    store.dispatch(actions.getLoc()).then(function() {
        var state = store.getState();
        store.dispatch(actions.getWeather(state.lat, state.long));
    });
    
    ReactDOM.render(
        <div>
            <h1>Hello World</h1>
            <span><a href="https://darksky.net/poweredby/">Powered by Dark Sky</a></span>
        </div>,
        document.getElementById('app')
    );
});