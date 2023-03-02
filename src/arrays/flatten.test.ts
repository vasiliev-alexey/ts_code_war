var flatten = function (array){
    // TODO: Program me
    return array.flat()
}


describe("Tests", () => {
    it("test", () => {
       expect(flatten([])).toEqual([]);
        expect(flatten([1, 2, 3])).toEqual( [1, 2, 3]);
        expect(flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]])).toEqual( [1, 2, 3, "a", "b", "c", 1, 2, 3]);
        expect(flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]])).toEqual( [3, 4, 5, [9, 9, 9], "a,b,c"]);
        expect(flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]])).toEqual([[3], [4], [5], 9, 9, 8, [1, 2, 3]]);
    });
});

// https://www.codewars.com/kata/5250a89b1625e5decd000413/train/javascript
