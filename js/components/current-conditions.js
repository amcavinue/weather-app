var React = require('react');
var ReactDOM = require('react-dom');
var LineChart = require("react-chartjs").Line;

var CurrentConditions = function(props) {
    var time = new Date();
    var hours = time.getHours();
    var mins = time.getMinutes();
    
    var hourlyTemp = {
        labels: [ (hours + 1) + ':' + mins,  (hours + 2) + ':' + mins, (hours + 3) + ':' + mins, (hours + 4) + ':' + mins, (hours + 5) + ':' + mins],
        datasets: [{
            data: [props.weather.forecast.hourly.hours[0].temperature, props.weather.forecast.hourly.hours[1].temperature, props.weather.forecast.hourly.hours[2].temperature, props.weather.forecast.hourly.hours[3].temperature, props.weather.forecast.hourly.hours[4].temperature]
        }]
    };
    
    console.log(hourlyTemp, 17);
    
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