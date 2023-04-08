function balancedNum(number: number): string {

    let s = number.toString();
    if (s.length <= 2) return "Balanced";
    let cnt = Math.floor((s.length - 1) / 2);
    let lhs = s.split("").map(c => +c).filter((_, i) => i < cnt).reduce((a, b) => a + b, 0);
    let rhs = s.split("").map(c => +c).reverse().filter((_, i) => i < cnt).reduce((a, b) => a + b, 0);
    return lhs == rhs ? "Balanced" : "Not Balanced";


}

import {assert} from "chai";


describe("Fixed tests", function () {
    it("Testing for 7", () => assert.strictEqual(balancedNum(7), "Balanced"));
    it("Testing for 959", () => assert.strictEqual(balancedNum(959), "Balanced"));
    it("Testing for 13", () => assert.strictEqual(balancedNum(13), "Balanced"));
    it("Testing for 432", () => assert.strictEqual(balancedNum(432), "Not Balanced"));
    it("Testing for 424", () => assert.strictEqual(balancedNum(424), "Balanced"));
    it("Testing for 1024", () => assert.strictEqual(balancedNum(1024), "Not Balanced"));
    it("Testing for 66545", () => assert.strictEqual(balancedNum(66545), "Not Balanced"));
    it("Testing for 295591", () => assert.strictEqual(balancedNum(295591), "Not Balanced"));
    it("Testing for 1230987", () => assert.strictEqual(balancedNum(1230987), "Not Balanced"));
    it("Testing for 56239814", () => assert.strictEqual(balancedNum(56239814), "Balanced"));
});



