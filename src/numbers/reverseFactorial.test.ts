function reverseFactorial(num) {

}


const Test = require('@codewars/test-compat');

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(reverseFactorial(120), '5!');
        Test.assertEquals(reverseFactorial(3628800), '10!');
        Test.assertEquals(reverseFactorial(150), 'None');
    });
});
