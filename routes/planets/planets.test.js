const request = require('supertest');
const app = require('../../app')
const { loadPlanetsData } = require('../../models/planets.model');
const path = require('path');
const dotenv = require('dotenv');
const {
  connectDB,
  disconnectDB,
} = require('../../db/connect')

dotenv.config({
  path: path.resolve(__dirname, '../../configs/config.env')
});

// We can create a test fixtures with different test cases by using this describe function.
// And passing in  a description for our group of tests.
// our tests are defined in this callback that we pass into the describe function which can call this test function 
// that defines each of our test cases.


describe('Planets Api',() => {
    beforeAll( async () => {
        await connectDB(process.env.MONGO_URI)
        await loadPlanetsData()
      });
  
      afterAll( async () => {
       await  disconnectDB()
});
  
describe('Test GET /planets', () => {
    jest.setTimeout(30000);
    test('It should respond with 200 success', async () => {
        const response = await request(app)
        .get('/v1/planets')
        .expect('Content-Type', /json/)
        .expect(200);
    });
  });

})