const request = require('supertest');

const app = require('../app'); //reference to you app.js file

describe('MUSTs', function () {

    describe('GET /', function () {
        it('Hello', function (done) {
            request(app)
                .get('/')
                .set('Accept', 'application/json')
                .expect('Content-Type', /html/)
                .expect(200, done);
        });
    });

    describe('GET /vices', function () {
        it('Returns vices', function (done) {
            request(app)
                .get('/vices')
                .set('Accept', 'application/json')
                .expect('Content-Type', /html/)
                .expect((res) => {
                    res.body = 'Hey'
                })
                .expect(200, done);
        });
    });
});