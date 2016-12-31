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
        // this.timeout(7000);
        chai.request(app)
            .get('/weather/42.3601/-71.0589')
            .end(function(err, res) {
                console.log(res.body);
                res.should.have.status(200);
                done();
            });
    });
});