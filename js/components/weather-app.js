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
    componentDidMount() {
        $('#sidebar').w2sidebar({
            name : 'sidebar',
            flatButton: true,
            nodes: [
                { id: 'level-1', text: 'Cities', img: 'icon-folder', expanded: true, group: true, groupShowHide: false,
                  nodes: [ { id: 'level-1-1', text: 'Los Angeles', icon: 'stateface stateface-ca' },
                           { id: 'level-1-2', text: 'New York City', icon: 'stateface stateface-ny' },
                           { id: 'level-1-3', text: 'Chicago', icon: 'stateface stateface-il' }
                         ]
                }
            ],
            onFlat: function (event) {
                $('#sidebar').css('width', (event.goFlat ? '35px' : '200px'));
            }
        });
    },
    render() {
        if (this.props.error) {
            alert('An error occurred while loading data for your area. Please reload the page or try again later.');
        }
        
        return (
            <div>
                <div id="sidebar"></div>
                
                <div id="weather-app">
                    <h1>Weather for <span className="location">{this.props.coords.city + ', ' + this.props.coords.state}</span></h1>
                    <CurrentConditions weather={this.props.weather}/>
                    <ForecastDaily days={this.props.weather.forecast.days}/>
                </div>
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