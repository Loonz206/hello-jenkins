var request = require('supertest');
var app = require('../app.js');

describe('GET /', function () {
    it('respond with hello boner', function (done){
        request(app).get('/').expect('hello boner', done);
    });
});