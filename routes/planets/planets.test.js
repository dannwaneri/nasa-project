const app = require('../../app')
const { loadPlanetsData } = require('../../models/planets.model');

// We can create a test fixtures with different test cases by using this describe function.
// And passing in  a description for our group of tests.
// our tests are defined in this callback that we pass into the describe function which can call this test function 
// that defines each of our test cases.

describe('Test GET /planets', () => {
    test('It should respond with 200 success', async () => {
        await loadPlanetsData()
        const response = await request(app)
        .get('/v1/planets')
        .expect('Content-Type', /json/)
        .expect(200);
    },10000);
  });