const sequenceSum = (begin, end, step) => {
    let rez = 0;
    for (let i = begin; i <= end; i = i + step) {
        rez = rez + i;
    }
    return rez;
};


describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        expect(sequenceSum(2, 6, 2)).toEqual(12)
        expect(sequenceSum(1, 5, 1)).toEqual(15)
        expect(sequenceSum(1, 5, 3)).toEqual(5)
    })
})


// https://www.codewars.com/kata/586f6741c66d18c22800010a/train
