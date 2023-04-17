function stray(numbers) {

    let nums = numbers.sort();
    return nums[0]==nums[1]? nums[nums.length-1]: nums[0];
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;


describe("Sample Tests", () => {
    it("Should pass Sample Tests", () => {
        assert.strictEqual(stray([1, 1, 2]), 2);
        assert.strictEqual(stray([1, 2, 1]), 2);
        assert.strictEqual(stray([2, 1, 1]), 2);
    });
});
