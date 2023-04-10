export function isPowerOfTwo(n: number): boolean {
       return Math.log2(n) %1 == 0;
}



import { assert } from "chai";

describe("isPowerOfTwo", () => {
   // it('2 is a power of 2', () => assert.equal(isPowerOfTwo(2), true));
   // it('4096 is a power of 2', () => assert.equal(isPowerOfTwo(4096), true));
    it('5 is a power of 2', () => assert.equal(isPowerOfTwo(5), false));
});
