function moveVowel(input: string) {

  return input.split("").filter(c => !['a', 'e', 'i', 'o', 'u'].includes(c)).concat(  input.split("").filter(c => ['a', 'e', 'i', 'o', 'u'].includes(c))).join("")

}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Move all vowels", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(moveVowel("day"),"dya");
        assert.strictEqual(moveVowel("apple"),"pplae");
        assert.strictEqual(moveVowel("peace"),"pceae");
        assert.strictEqual(moveVowel("maker"),"mkrae");
    })
});
