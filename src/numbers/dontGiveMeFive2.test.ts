function dontGiveMeFive(start, end) { // start < end
    if (start < 0) {
        if (end == 0) return dontGiveMeFive(1, -start) + 1;
        if (end < 0) return dontGiveMeFive(-end, -start);
        return dontGiveMeFive(1, -start) + dontGiveMeFive(1, end) + 1;
    }
    if (start == 0) return _without5(start + 1, end) + 1;
    return _without5(start, end);
}

// 0 < a < b
const _without5 = (a, b) => (b - a + 1) - _with5(b) + _with5(a - 1);

// count of numbers with 5 in [1, n]
// based on: <http://www.geeksforgeeks.org/count-numbers-from-1-to-n-that-have-4-as-a-a-digit>
function _with5(n) {
    if (n < 5) return 0;
    if (n < 15) return 1;
    const d = Math.floor(Math.log10(n));
    const p = Math.pow(10, d), c = p - Math.pow(9, d), m = Math.floor(n/p);
    if (m == 5) return m*c + (n % p) + 1;
    if (m >  5) return (m - 1)*c + p + _with5(n % p);
    return m*c + _with5(n % p);
}

const chai = require("chai");
const assert = chai.assert;

describe("Example Tests", function(){
    it("small numbers", function(){
        assert.strictEqual(dontGiveMeFive(-17, 9), 24);
        assert.strictEqual(dontGiveMeFive(1, 9), 8);
        assert.strictEqual(dontGiveMeFive(4, 17), 12);
        assert.strictEqual(dontGiveMeFive(-17, -4), 12);
    });
    it("larger numbers", function(){
        assert.strictEqual(dontGiveMeFive(984, 4304), 2449);
        assert.strictEqual(dontGiveMeFive(2313, 2317), 4);
        assert.strictEqual(dontGiveMeFive(-4045, 2575), 4819);
        assert.strictEqual(dontGiveMeFive(-4436, -1429), 2194);
    });
    it("huge numbers", function(){
        assert.strictEqual(dontGiveMeFive(40076, 215151422963990), 49707598394353);
        assert.strictEqual(dontGiveMeFive(-206981731, 223575697903165), 51841599744277);
        assert.strictEqual(dontGiveMeFive(-249022878360451, -249022878219653), 79380);
        assert.strictEqual(dontGiveMeFive(-90000000000000, 900000000000000), 203349266266321);
    });
    it("edge cases", function(){
        assert.strictEqual(dontGiveMeFive(0, 1), 2);
        assert.strictEqual(dontGiveMeFive(5, 15), 9);
        assert.strictEqual(dontGiveMeFive(-5, 4), 9);
        assert.strictEqual(dontGiveMeFive(51, 60), 1);
    });
});
