var React = require('react');
var ReactDOM = require('react-dom');

var CurrentConditions = function(props) {
    return (
        <div>
            <h2>{props.weather.currently.summary}</h2>
        </div>
    );
};

module.exports = CurrentConditions;