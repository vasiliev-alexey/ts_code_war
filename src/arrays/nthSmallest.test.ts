export function nthSmallest(arr: number[], pos: number) {
    return arr.sort( (a, b) => a-b)[pos-1]
}


import {assert} from "chai";


describe("Basic tests", () => {
    it("nthSmallest([3, 1, 2], 2)", () => expect(nthSmallest([3, 1, 2], 2)).toEqual(2));
    it("nthSmallest([15, 20, 7, 10, 4, 3], 3)", () => expect(nthSmallest([15, 20, 7, 10, 4, 3], 3)).toEqual(7));
    it("nthSmallest([-5, -1, -6, -18], 4)", () => expect(nthSmallest([-5, -1, -6, -18], 4)).toEqual(-1));
    it("nthSmallest([-102, -16, -1, -2, -367, -9], 5)", () => expect(nthSmallest([-102, -16, -1, -2, -367, -9], 5)).toEqual(-2));
    it("nthSmallest([2, 169, 13, -5, 0, -1], 4)", () => expect(nthSmallest([2, 169, 13, -5, 0, -1], 4)).toEqual(2));
});
