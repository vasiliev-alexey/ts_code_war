export function fortune(f0: number, p: number, c0: number, n: number, i: number): boolean {
     if (f0 < 0) {
        return false;
    }
    if (n === 1) {
        return true;
    }
    let  deposit = f0;
    let inf_coeff = 1+ i/100;

    for (let j = 1; j < n ; j++) {

        let withdraw = parseInt((c0 * Math.pow(inf_coeff , j-1)).toString() );
        deposit = parseInt((deposit + deposit  * p/100  - withdraw).toString());
    }

    return  deposit >=0

}

// https://www.codewars.com/kata/56445c4755d0e45b8c00010a/train/typescript

import { assert } from "chai";

describe("Fixed Tests fortune", function() {
    it("Basic tests", function() {

        assert.strictEqual(fortune(100000, 1, 9185, 12, 1), false);
        assert.strictEqual(fortune(100000, 1, 2000, 15, 1), true);
        //
        assert.strictEqual(fortune(100000000, 1, 100000, 50, 1), true);
        assert.strictEqual(fortune(100000000, 1.5, 10000000, 50, 1), false);
        assert.strictEqual(fortune(100000000, 5, 1000000, 50, 1), true);
    });
});
