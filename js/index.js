require('babel-polyfill');
var React = require('react');
var ReactDOM = require('react-dom');

var actions = require('./actions/index');
var store = require('./store');

document.addEventListener('DOMContentLoaded', function() {
    var zip;
    do{
        zip = window.prompt('Please enter your 5-digit zip code.');
    } while(zip == null || zip == "" || !zip.match(/^\d{5}$/igm));
    zip = Number(zip);
    store.dispatch(actions.storeZip(zip));
    
    store.dispatch(actions.getWeather(zip));
    
    ReactDOM.render(
        <h1>Hello World</h1>,
        document.getElementById('app')
    );
});