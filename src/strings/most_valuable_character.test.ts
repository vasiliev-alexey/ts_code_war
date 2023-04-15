function solve(st) {

    let chars = new Map();
    let res = [];
    for (const char of st.split("")) {
        chars.set(char, (chars.get(char)|| 0)+1);
    }
    let freq = ([...chars.values()].sort()).reverse()[0];

    for (let entry of chars.entries()) {
        if(entry[1] == freq) {
              res.push(entry[0])
        }
    }
    return  res.sort()[0]



}


const chai = require("chai");
const assert = chai.assert;

describe("Example cases", function() {
    it("basic tests", function() {
        assert.strictEqual(solve('a'), 'a');
        assert.strictEqual(solve('aa'), 'a');
        assert.strictEqual(solve('bcd'), 'b');
       assert.strictEqual(solve('axyzxyz'), 'x');
        assert.strictEqual(solve('aabccc'), 'c');
        assert.strictEqual(solve('dcbadcba'), 'a');
    });
});
