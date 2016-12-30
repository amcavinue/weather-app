var React = require('react');
var TestUtils = require('react-addons-test-utils');
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var expect = chai.expect;

var server = require('../server.js');
var app = server.app;

chai.use(chaiHttp);

describe('Server.js', function() {
    it('Gets the weather data',  function(done) {
        chai.request(app)
            .get('/weather')
            .end(function(err, res) {
                res.should.have.status(200);
                done();
            });
    });
});