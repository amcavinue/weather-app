const React = require('react');
const ReactDOM = require('react-dom');
const LineChart = require("react-chartjs-2").Line;
const moment = require('moment');

const ForecastDaily = (props) => {
  let dailyTemp = {
    labels: [],
    datasets: [{
      data: [],
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
  
  for (let i = 0; i < 5; i++) {
    dailyTemp.labels.push(moment().add(1 * (i+1), 'd').format("dddd"));
    dailyTemp.datasets[0].data.push(props.days[i].temperature);
  }
  
  return (
    <section>
      <h3>Your 5 day forecast</h3>
      <LineChart data={dailyTemp} options={chartOptions} />
    </section>
  );
};

module.exports = ForecastDaily;