const request = require('supertest');
const app = require('../../app')

// We can create a test fixtures with different test cases by using this describe function.
// And passing in  a description for our group of tests.
// our tests are defined in this callback that we pass into the describe function which can call this test function 
// that defines each of our test cases.

describe('Test GET /planets', () => {
    test('It should respond with 200 success', async () => {
        const response = await request(app)
        .get('/planets')
        .expect('Content-Type', /json/)
        .expect(200);
    });
  });