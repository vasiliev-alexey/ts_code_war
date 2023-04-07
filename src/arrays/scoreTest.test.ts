//returns the test score
function scoreTest(str : number[], right: number, omit: number, wrong: number){

   return  str.reduce( (a, b) => a +  (b <1 ? +right : b< 2? omit : -wrong) , 0 )

}


const { assert } = require("chai")

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(scoreTest([0, 0, 0, 0, 2, 1, 0], 2, 0, 1), 9);
        assert.strictEqual(scoreTest([0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2), 3);
    })
})

class Solution{


    static main(greetingsFromJavatlacati: string) {
        console.log("Hello World!")
    }
}



describe("Tests", () => {
    it("test", () => {
        Solution.main("greetings from Javatlacati!");
        Test.expect(logRecord.indexOf("Hello World!") !== -1);
    });
});


const helloWorld = () => {
return String.fromCharCode(...[72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33])
};

describe("Hello World with out Strings", () => {
    it("Hello, World!", () => {
      expect(helloWorld()).toEqual( "Hello, World!");
    });
});


function whatday(num) {

    switch (num) {
        case  1 : return "Sunday"
        case  2 : return "Monday"
        case  3 : return "Tuesday"
        case   4 : return "Wednesday"
        case   5 : return "Thursday"
        case   6 : return "Friday"
        case   7 : return "Saturday"
        default : return   "Wrong, please enter a number between 1 and 7"
    }





}
