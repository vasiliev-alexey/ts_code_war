function battle(x: string, y: string) {

    const first =  x.split("").map( c => (c == c.toUpperCase() ? 1 : 0.5 )*  (c.toUpperCase().charCodeAt(0) - 64)).reduce( (a  , b ) =>a+b);
    const second =  y.split("").map( c => (c == c.toUpperCase() ? 1 : 0.5 )*  (c.toUpperCase().charCodeAt(0) - 64)).reduce( (a  , b ) =>a+b);

    if(first == second) {
        return "Tie!"
    }
     else  if (first > second) {
         return  x
    } else  {
         return  y
    }



}
// https://www.codewars.com/kata/595e9f258b763bc2d2000032/train/javascript
const strictEqual = require('chai').assert.strictEqual;

function doTest (group1, group2, expected) {
    const actual = battle(group1, group2);
    strictEqual(actual, expected, `for\n"${group1}"\nvs\n"${group2}"\n`);
}

describe("Basic Tests", function () {
    it("sample tests", function () {
        doTest("One", "Two", "Two");
        doTest("One", "Neo", "One");
        doTest("One", "neO", "Tie!");
        doTest("Foo", "BAR", "Tie!");
        doTest("Four", "Five", "Four");
    });
});
