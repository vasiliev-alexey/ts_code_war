  function cleanString(s: string): string {
    let res: string[] = [];
    s.split("").forEach( ( c) => c != '#' ? res.push(c): res.pop());
     return res.join("");
}


// See https://www.chaijs.com for how to use Chai.
import { assert } from "chai";
// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/typescript

// TODO Add your tests here
describe("example", function() {
    it("test", function() {
        assert.equal(cleanString('abc#d##c'), "ac")
        assert.equal(cleanString('abc####d##c#'), "" )
    });
});
