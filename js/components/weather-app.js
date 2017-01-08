var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;

var CurrentConditions = require('./current-conditions');
var ForecastDaily = require('./forecast-daily');
var actions = require('../actions/index');

var WeatherApp = React.createClass({
    componentDidUpdate() {
        if (this.props.error) {
            this.props.dispatch(actions.resetError());
        }
    },
    render() {
        if (this.props.error) {
            alert('An error occurred while loading data for your area. Please reload the page or try again later.');
        }
        
        return (
            <div>
                <h1>Weather for your area</h1>
                <CurrentConditions weather={this.props.weather} />
                <ForecastDaily days={this.props.weather.forecast.days}/>
            </div>
        );
    }
});

var mapStateToProps = function(state, props) {
    return {
        coords: state.coords,
        error: state.error,
        weather: state.weather
    };
};

var Container = connect(mapStateToProps)(WeatherApp);

module.exports = Container;