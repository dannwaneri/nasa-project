const request = require('supertest');
const app = require('../../app')
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



describe('Launches Api',() => {
  beforeAll(
    async () => {
      await connectDB(process.env.MONGO_URI)
    },100000);

    afterAll(async () => {
      await disconnectDB()
    },100000);

    describe('Test GET /launches', () => {
      test('It should respond with 200 success', async () => {
          const response = await request(app)
          .get('/v1/launches')
          .expect('Content-Type', /json/)
          .expect(200);
      });
    });

    describe('Test POST /launches', () => {

      const completeLaunchData = {
          mission: 'USS Enterprise',
          rocket: 'NCC 1701-D',
          target: 'Kepler-62 f',
          launchDate: 'January 4, 2028',
        };
      
        const launchDataWithoutDate = {
          mission: 'USS Enterprise',
          rocket: 'NCC 1701-D',
          target: 'Kepler-62 f',
        };
  
        const launchDataWithInvalidDate = {
          mission: 'USS Enterprise',
          rocket: 'NCC 1701-D',
          target: 'Kepler-62 f',
          launchDate: 'zoot',
        };
  
        test('It should respond with 201 created', async () => {
          const response = await request(app)
        .post('/v1/launches')
        .send(completeLaunchData)
        .expect('Content-Type', /json/)
          .expect(201);
  
          const requestDate = new Date(completeLaunchData.launchDate).valueOf();
         const responseDate = new Date(response.body.launchDate).valueOf();
         expect(responseDate).toBe(requestDate);
  
      expect(response.body).toMatchObject(launchDataWithoutDate);
        })
        test('It should catch missing required properties', async () => {
          const response = await request(app)
          .post('/v1/launches')
          .send(launchDataWithoutDate)
          .expect('Content-Type', /json/)
          .expect(400);
          expect(response.body).toStrictEqual({
              error: 'Missing required launch property',
            });
        });
        test('It should catch invalid dates', async () => {
          const response = await request(app)
            .post('/v1/launches')
            .send(launchDataWithInvalidDate)
            .expect('Content-Type', /json/)
            .expect(400);
      
          expect(response.body).toStrictEqual({
            error: 'Invalid launch date',
          });
        });
    })
})






  