export function productArray(nums: number[]): number[] {
    const mult = nums.reduce(   (n ,v ) => n*v , 1);
    return nums.map(e => mult / e)
}


describe("Basic Tests", () => {
    it("Testing for [12, 20]", () => expect(productArray([12, 20])).toEqual([20, 12]));
    it("Testing for [3, 27, 4, 2]", () => expect(productArray([3, 27, 4, 2])).toEqual([216, 24, 162, 324]));
    it("Testing for [13, 10, 5, 2, 9]", () => expect(productArray([13, 10, 5, 2, 9])).toEqual([900, 1170, 2340, 5850, 1300]));
    it("Testing for [16, 17, 4, 3, 5, 2]", () =>
        expect(productArray([16, 17, 4, 3, 5, 2])).toEqual([2040, 1920, 8160, 10880, 6528, 16320]));
});
