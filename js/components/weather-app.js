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
            state: this.props.coords.state,
            localCity: true
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
            flatButton: window.innerWidth <= 500 ? false : true,
            nodes: [
                { id: 'level-1', text: 'Cities', img: 'icon-folder', expanded: true, group: true, groupShowHide: false, collapsible: false,
                  nodes: [ { id: 'localCity', text: 'Your Location', icon: 'stateface stateface-' + this.props.coords.stateAbbr, selected: true, onClick: this.showLocalCity },
                           { id: 'newYorkCity', text: 'New York City', icon: 'stateface stateface-ny', onClick: this.showPopularCity },
                           { id: 'losAngeles', text: 'Los Angeles', icon: 'stateface stateface-ca', onClick: this.showPopularCity },
                           { id: 'chicago', text: 'Chicago', icon: 'stateface stateface-il', onClick: this.showPopularCity },
                           { id: 'seattle', text: 'Seattle', icon: 'stateface stateface-wa', onClick: this.showPopularCity },
                           { id: 'washingtonDC', text: 'Washington D.C.', icon: 'stateface stateface-md', onClick: this.showPopularCity },
                           { id: 'dallas', text: 'Dallas', icon: 'stateface stateface-tx', onClick: this.showPopularCity },
                           { id: 'miami', text: 'Miami', icon: 'stateface stateface-fl', onClick: this.showPopularCity },
                           { id: 'philadelphia', text: 'Philadelphia', icon: 'stateface stateface-pa', onClick: this.showPopularCity }
                         ]
                }
            ],
            onFlat: function (event) {
                $('#sidebar').css('width', (event.goFlat ? '35px' : '200px'));
            }
        });
        
        if (window.innerWidth <= 500) {
            w2ui['sidebar'].goFlat();
        }
    },
    showLocalCity() {
        store.dispatch(actions.getCurrWeather(this.props.coords.lat, this.props.coords.long))
        .then(() => {
            let state = store.getState();
            return store.dispatch(actions.getForecastHourly(this.props.coords.lat, this.props.coords.long));
        })
        .then(() => {
            let state = store.getState();
            return store.dispatch(actions.getForecastDaily(this.props.coords.lat, this.props.coords.long));
        });
        
        this.setState({
            city: this.props.coords.city,
            state: this.props.coords.state,
            localCity: true
        });
    },
    showPopularCity(e) {
        store.dispatch(actions.getCurrWeather(this.props.popularCities[e.target].lat, this.props.popularCities[e.target].long))
        .then(() => {
            let state = store.getState();
            return store.dispatch(actions.getForecastHourly(this.props.popularCities[e.target].lat, this.props.popularCities[e.target].long));
        })
        .then(() => {
            let state = store.getState();
            return store.dispatch(actions.getForecastDaily(this.props.popularCities[e.target].lat, this.props.popularCities[e.target].long));
        });
        
        this.setState({
            city: this.props.popularCities[e.target].city,
            state: this.props.popularCities[e.target].state,
            localCity: false
        });
    },
    render() {
        if (this.props.error) {
            alert('An error occurred while loading data for your area. Please reload the page or try again later.');
        }
        
        return (
            <div>
                <div id="weather-app">
                    <div id="sidebar"></div>
                    <h1>Weather for <span className="location">{this.state.city + ', ' + this.state.state + (this.state.localCity ? ' (your location)' : '')}</span></h1>
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