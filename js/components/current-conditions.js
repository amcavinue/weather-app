var React = require('react');
var ReactDOM = require('react-dom');

var CurrentConditions = function(props) {
    console.log(props, 5);
    
    return (
        <section>
            <h2>Currently</h2>
            <h3>{ props.weather.currently.summary }</h3>
            <div>There is a { Math.round(props.weather.currently.precipProbability * 100) }% chance of precipitation.</div>
            <div>The temperature is { Math.round(props.weather.currently.temperature) }&deg;F&#47;{ Math.round((props.weather.currently.temperature - 32) * (5/9)) }&deg;C</div>
            <div>It feels like { Math.round(props.weather.currently.feelsLike) }&deg;F&#47;{ Math.round((props.weather.currently.feelsLike -32) * (5/9)) }&deg;C</div>
        </section>
    );
};

module.exports = CurrentConditions;