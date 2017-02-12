const React = require('react');
const ReactDOM = require('react-dom');
const connect = require('react-redux').connect;

const CurrentConditions = require('./current-conditions');
const ForecastDaily = require('./forecast-daily');
const actions = require('../actions/index');
const store = require('../store');

const WeatherApp = React.createClass({
    getInitialState() {
        return {
            city: this.props.coords.city,
            state: this.props.coords.state
        };
    },
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
                { id: 'level-1', text: 'Cities', img: 'icon-folder', expanded: true, group: true, groupShowHide: false, collapsible: false,
                  nodes: [ { id: 'level-1-0', text: this.props.coords.city, icon: 'stateface stateface-' + this.props.coords.stateAbbr, selected: true },
                           { id: 'level-1-1', text: 'New York City', icon: 'stateface stateface-ny' },
                           { id: 'level-1-2', text: 'Los Angeles', icon: 'stateface stateface-ca' },
                           { id: 'level-1-3', text: 'Chicago', icon: 'stateface stateface-il' },
                           { id: 'level-1-4', text: 'Seattle', icon: 'stateface stateface-wa' },
                           { id: 'level-1-5', text: 'Washington D.C.', icon: 'stateface stateface-md' },
                           { id: 'level-1-6', text: 'Dallas', icon: 'stateface stateface-tx' },
                           { id: 'level-1-7', text: 'Miami', icon: 'stateface stateface-fl' },
                           { id: 'level-1-8', text: 'Philadelphia', icon: 'stateface stateface-pa' }
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
        
        console.log(store.getState());
        
        return (
            <div>
                <div id="weather-app">
                    <div id="sidebar"></div>
                    <h1>Weather for <span className="location">{this.state.city + ', ' + this.state.state}</span></h1>
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
        weather: state.weather,
        popularCities: state.popularCities
    };
};

const Container = connect(mapStateToProps)(WeatherApp);

module.exports = Container;