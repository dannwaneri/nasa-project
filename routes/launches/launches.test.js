// We can create a test fixtures with different test cases by using this describe function.
// And passing in  a description for our group of tests.
// our tests are defined in this callback that we pass into the describe function which can call this test function 
// that defines each of our test cases.

describe('Test GET /launches', () => {
    test('It should respond with 200 success', () => {
      const response = 200;
      expect(response).toBe(200);
    });
  });


  describe('Test POST /launches', () => {
      test('It should respond with 200 success', () => {

      })
      test('It should catch missing required properties', () => {});
  test('It should catch invalid dates', () => {});
  })