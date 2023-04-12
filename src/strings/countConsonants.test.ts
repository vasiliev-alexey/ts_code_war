function countConsonants(str: string) {

    return str.toLowerCase().split("").filter( c =>/^[a-z]+$/.test(c)).filter(c => !["a", "e", "i", "o", "u"].includes(c)).filter((v, i, a) => i == a.lastIndexOf(v)).length

}


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Fixed Tests", () => {
    it("Case 1", function () {
        assert.strictEqual(countConsonants("sillystring"), 7, "do not count duplicate consonants!")
    });
});
