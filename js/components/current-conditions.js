var React = require('react');
var ReactDOM = require('react-dom');
var LineChart = require("react-chartjs").Line;
var moment = require('moment');

var CurrentConditions = (props) => {
    var hourlyTemp = {
        labels: [],
        datasets: [{
            data: []
        }]
    };
    
    for (let i = 0; i < 5; i++) {
        hourlyTemp.labels.push(moment().add(3 * (i + 1), 'h').format("ha"));
        hourlyTemp.datasets[0].data.push(props.weather.forecast.hours[i].temperature);
    }
    
    return (
        <section>
            <h2>Currently</h2>
            <h3>{ props.weather.currently.summary }</h3>
            <div>The temperature is { Math.round(props.weather.currently.temperature) }
                 &deg;F&#47;
                 { Math.round((props.weather.currently.temperature - 32) * (5/9)) }
                 &deg;C
             </div>
            <div>The humidity is { Math.round(props.weather.currently.humidity) }
                &deg;F&#47;
                { Math.round((props.weather.currently.humidity - 32) * (5/9)) }
                &deg;C
            </div>
            <h4>Hourly</h4>
            <LineChart data={ hourlyTemp } />
        </section>
    );
};

module.exports = CurrentConditions;