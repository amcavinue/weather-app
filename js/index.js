require('babel-polyfill');
var React = require('react');
var ReactDOM = require('react-dom');

document.addEventListener('DOMContentLoaded', function() {
    var zip;
    do{
        zip = window.prompt('Please enter your 5-digit zip code.');
    } while(zip == null || zip == "" || !zip.match(/^\d{5}$/igm));
    zip = Number(zip);
        
    ReactDOM.render(
        <h1>Hello World</h1>,
        document.getElementById('app')
    );
});
