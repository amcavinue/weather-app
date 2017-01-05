var React = require('react');
var ReactDOM = require('react-dom');
var LineChart = require("react-chartjs").Line;
var moment = require('moment');

var CurrentConditions = function(props) {
    var hourlyTemp = {
        labels: [moment().add(3, 'h').format("hh:mm"), moment().add(6, 'h').format("hh:mm"), moment().add(9, 'h').format("hh:mm"), moment().add(12, 'h').format("hh:mm"), moment().add(15, 'h').format("hh:mm")],
        datasets: [{
            data: [props.weather.forecast.hours[0].temperature, props.weather.forecast.hours[1].temperature, props.weather.forecast.hours[2].temperature, props.weather.forecast.hours[3].temperature, props.weather.forecast.hours[4].temperature]
        }]
    };
    
    return (
        <section>
            <h2>Currently</h2>
            <h3>{ props.weather.currently.summary }</h3>
            <div>The temperature is { Math.round(props.weather.currently.temperature) }&deg;F&#47;{ Math.round((props.weather.currently.temperature - 32) * (5/9)) }&deg;C</div>
            <div>The humidity is { Math.round(props.weather.currently.humidity) }&deg;F&#47;{ Math.round((props.weather.currently.humidity - 32) * (5/9)) }&deg;C</div>
            <h4>Hourly</h4>
            <LineChart data={ hourlyTemp } />
        </section>
    );
};

module.exports = CurrentConditions;