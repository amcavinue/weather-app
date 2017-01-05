var React = require('react');
var ReactDOM = require('react-dom');
var LineChart = require("react-chartjs").Line;
var moment = require('moment');

var ForecastDaily = (props) => {
  let dailyTemp = {
    labels: [],
    datasets: [{
      data: []
    }]
  };
  
  for (let i = 0; i < 5; i++) {
    dailyTemp.labels.push(moment().add(1, 'd').format("dddd"));
    dailyTemp.datasets[0].data.push(props.days[i].temperature);
  }
  
  return (
    <section>
      <h2>Your 5 day forecast</h2>
      <LineChart data={dailyTemp} />
    </section>
  );
};

module.exports = ForecastDaily;