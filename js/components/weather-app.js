const React = require('react');
const ReactDOM = require('react-dom');
const connect = require('react-redux').connect;

const CurrentConditions = require('./current-conditions');
const ForecastDaily = require('./forecast-daily');
const actions = require('../actions/index');

const WeatherApp = React.createClass({
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
                <h1>Weather for <span className="location">{this.props.coords.city + ', ' + this.props.coords.state}</span></h1>
                <CurrentConditions weather={this.props.weather}/>
                <ForecastDaily days={this.props.weather.forecast.days}/>
            </div>
        );
    }
});

const mapStateToProps = function(state, props) {
    return {
        coords: state.coords,
        error: state.error,
        weather: state.weather
    };
};

const Container = connect(mapStateToProps)(WeatherApp);

module.exports = Container;