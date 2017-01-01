var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;

var CurrentConditions = require('./current-conditions');

var WeatherApp = function(props) {
    return (
        <div>
            <h1>Weather for your area</h1>
            <CurrentConditions weather={props.weather} />
            <span><a href="https://darksky.net/poweredby/">Powered by Dark Sky</a></span>
        </div>
    );
};

var mapStateToProps = function(state, props) {
    return {
        lat: state.lat,
        long: state.long,
        weather: state.weather
    };
};

var Container = connect(mapStateToProps)(WeatherApp);

module.exports = Container;