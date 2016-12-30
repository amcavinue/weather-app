var actions = require('../actions/index');
var update = require('react-addons-update');

var initialState = {
    targetNumber: null,
    guesses: [],
    responses: [],
    totalGuesses: 0,
    fewestGuesses: null,
    alreadyGuessed: false,
    wonGame: false
};