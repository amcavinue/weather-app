require('babel-polyfill');
const React = require('react');
const ReactDOM = require('react-dom');
const Provider = require('react-redux').Provider;

const actions = require('./actions/index');
const store = require('./store');
const WeatherApp = require('./components/weather-app');

document.addEventListener('DOMContentLoaded', () => {
    store.dispatch(actions.getLoc())
    .then(() => {
        let state = store.getState();
        return store.dispatch(actions.getCurrWeather(state.coords.lat, state.coords.long));
    })
    .then(() => {
        let state = store.getState();
        return store.dispatch(actions.getForecastHourly(state.coords.lat, state.coords.long));
    })
    .then(() => {
        let state = store.getState();
        return store.dispatch(actions.getForecastDaily(state.coords.lat, state.coords.long));
    })
    .then(() => {
        let state = store.getState()
        
        ReactDOM.render(
            <Provider store={store}>
                <WeatherApp />
            </Provider>,
            document.getElementById('app')
        );
    });
});