const test = require('tape');
const request = require('supertest');
const app = require('../src/app');

test('testing home page', (t) => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', 'text/html; charset=utf-8')
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, 'The app should return a statusCode of 200 on / route');
    })
    t.end();
});
