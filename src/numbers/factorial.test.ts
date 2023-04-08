function factorial(n)
{
  return   [...Array.from(Array(n) ).keys()].map( e => e+1).reduce( (a,b) => a * b , 1) ;
}

const Test = require('@codewars/test-compat');

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(factorial(0), 1, "factorial for 0 is 1");
        Test.assertEquals(factorial(1), 1, "factorial for 1 is 1");
        Test.assertEquals(factorial(2), 2, "factorial for 2 is 2");
        Test.assertEquals(factorial(3), 6, "factorial for 3 is 6");
    });
});
