const React = require('react');
const ReactDOM = require('react-dom');
const LineChart = require("react-chartjs-2").Line;
const moment = require('moment');

const CurrentConditions = (props) => {
    let hourlyTemp = {
        labels: [],
        datasets: [{
            data: []
        }]
    };
    
    let chartOptions = {
        legend: {
            display: false
        },
        tooltips: {
            enabled: false
        },
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Farenheight'
                }
            }],
            xAxes: [{
                
            }]
        }
    };
    
    function upperCaseFirst(str){
        // http://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
        return str.charAt(0).toUpperCase() + str.substring(1);
    }
    
    for (let i = 0; i < 5; i++) {
        hourlyTemp.labels.push(moment().add(3 * (i + 1), 'h').format("ha"));
        hourlyTemp.datasets[0].data.push(props.weather.forecast.hours[i].temperature);
    }
    
    return (
        <section>
            <h2 className="currently">Currently</h2>
            <h3 className="currently">{ upperCaseFirst(props.weather.currently.summary) }</h3>
            <div>The temperature is { Math.round(props.weather.currently.temperature) }
                 &deg;F&#47;
                 { Math.round((props.weather.currently.temperature - 32) * (5/9)) }
                 &deg;C
             </div>
            <div>The humidity is { Math.round(props.weather.currently.humidity) }&#37;</div>
            <h3>Hourly</h3>
            <LineChart data={hourlyTemp} options={chartOptions} />
        </section>
    );
};

module.exports = CurrentConditions;