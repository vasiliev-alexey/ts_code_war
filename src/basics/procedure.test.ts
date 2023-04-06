function procedure(n: number) {

    return Array.from(Array(Math.floor(100 / n)), (_, i) => ((i + 1) * n).toString().split("").map(c => +c).reduce((a, b) => a + b))
        .reduce((a, b) => a + b);

}


const chai = require("chai");
const assert = chai.assert;

describe("Solution", function () {
    it("Fixed Test", function () {
        assert.strictEqual(procedure(30), 18);
        assert.strictEqual(procedure(12), 72);
        assert.strictEqual(procedure(49), 30);
        assert.strictEqual(procedure(17), 48);
        assert.strictEqual(procedure(10), 46);
    });
});
