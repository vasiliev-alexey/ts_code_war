function josephusSurvivor(n: number, k: number) : number{
    if (n==1) {
        return  1;
    } else {
         return  ( josephusSurvivor (n-1, k) + k - 1 ) % n + 1;
    }
}
//   return n === 1 ? 1 : (josephusSurvivor(n - 1, k) + k - 1) % n + 1;

import {assert} from "chai";


describe("Basic tests", function () {
    it("josephusSurvivor(7, 3)", () => assert.strictEqual(josephusSurvivor(7, 3), 4));
    it("josephusSurvivor(11, 19)", () => assert.strictEqual(josephusSurvivor(11, 19), 10));
    it("josephusSurvivor(40, 3)", () => assert.strictEqual(josephusSurvivor(40, 3), 28));
    it("josephusSurvivor(14, 2)", () => assert.strictEqual(josephusSurvivor(14, 2), 13));
    it("josephusSurvivor(100, 1)", () => assert.strictEqual(josephusSurvivor(100, 1), 100));
    it("josephusSurvivor(1, 300)", () => assert.strictEqual(josephusSurvivor(1, 300), 1));
    it("josephusSurvivor(2, 300)", () => assert.strictEqual(josephusSurvivor(2, 300), 1));
    it("josephusSurvivor(5, 300)", () => assert.strictEqual(josephusSurvivor(5, 300), 1));
    it("josephusSurvivor(7, 300)", () => assert.strictEqual(josephusSurvivor(7, 300), 7));
    it("josephusSurvivor(300, 300)", () => assert.strictEqual(josephusSurvivor(300, 300), 265));
});

/*
Josephus Survivor
In this kata you have to correctly return who is the "survivor", ie: the last element of a Josephus permutation.

Basically you have to assume that n people are put into a circle and that they are eliminated in steps of k elements, like this:

n=7, k=3 => means 7 people in a circle
one every 3 is eliminated until one remains
[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] => 3 is counted out
[1,2,4,5,7] => 6 is counted out
[1,4,5,7] => 2 is counted out
[1,4,5] => 7 is counted out
[1,4] => 5 is counted out
[4] => 1 counted out, 4 is the last element - the survivor!
The above link about the "base" kata description will give you a more thorough insight about the origin of this kind of permutation, but basically that's all that there is to know to solve this kata.

Notes and tips: using the solution to the other kata to check your function may be helpful, but as much larger numbers will be used, using an array/list to compute the number of the survivor may be too slow; you may assume that both n and k will always be >=1.
*/
