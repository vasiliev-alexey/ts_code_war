function giveChange(amount) {


    let res = [0, 0, 0, 0, 0, 0];
    res[5] = Math.floor(amount / 100);
    amount = amount - res[5] * 100
    res[4] = Math.floor(amount / 50);
    amount = amount - res[4] * 50
    res[3] = Math.floor(amount / 20);
    amount = amount - res[3] * 20
    res[2] = Math.floor(amount / 10);
    amount = amount - res[2] * 10
    res[1] = Math.floor(amount / 5);
    amount = amount - res[1] * 5
    res[0] = Math.floor(amount / 1);
    return res
}


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
    it("Tests the example test cases", () => {
        assert.deepEqual(giveChange(365), [0, 1, 1, 0, 1, 3]);
        assert.deepEqual(giveChange(217), [2, 1, 1, 0, 0, 2]);
        assert.deepEqual(giveChange(8), [3, 1, 0, 0, 0, 0]);
    });
});
