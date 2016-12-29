require('babel-polyfill');
var React = require('react');
var ReactDOM = require('react-dom');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <h1>Hello World</h1>,
        document.getElementById('app')
    );
});
