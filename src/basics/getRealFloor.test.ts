function getRealFloor(n) {

    if (n < 0) {
        return n;
    } else if (n < 13) {
        return n - 1
    } else {
        return n - 2
    }

}


const {assert} = require('chai');

describe("Tests", () => {
    it("test", () => {
        assert.strictEqual(getRealFloor(1), 0);
        assert.strictEqual(getRealFloor(5), 4);
        assert.strictEqual(getRealFloor(15), 13);
        assert.strictEqual(getRealFloor(-2), -2);
    });
});
