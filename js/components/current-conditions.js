var React = require('react');
var ReactDOM = require('react-dom');
var LineChart = require("react-chartjs").Line;
var moment = require('moment');

var CurrentConditions = function(props) {
    var hourlyTemp = {
        labels: [moment().add(1, 'h').format("hh:mm"), moment().add(2, 'h').format("hh:mm"), moment().add(3, 'h').format("hh:mm"), moment().add(4, 'h').format("hh:mm"), moment().add(5, 'h').format("hh:mm")],
        datasets: [{
            data: [props.weather.forecast.hourly.hours[0].temperature, props.weather.forecast.hourly.hours[1].temperature, props.weather.forecast.hourly.hours[2].temperature, props.weather.forecast.hourly.hours[3].temperature, props.weather.forecast.hourly.hours[4].temperature]
        }]
    };
    
    return (
        <section>
            <h2>Currently</h2>
            <h3>{ props.weather.currently.summary }</h3>
            <div>There is a { Math.round(props.weather.currently.precipProbability * 100) }% chance of precipitation.</div>
            <div>The temperature is { Math.round(props.weather.currently.temperature) }&deg;F&#47;{ Math.round((props.weather.currently.temperature - 32) * (5/9)) }&deg;C</div>
            <div>It feels like { Math.round(props.weather.currently.feelsLike) }&deg;F&#47;{ Math.round((props.weather.currently.feelsLike -32) * (5/9)) }&deg;C</div>
            <h4>Hourly</h4>
            <LineChart data={ hourlyTemp } />
        </section>
    );
};

module.exports = CurrentConditions;