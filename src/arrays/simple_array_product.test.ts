function solve(sets) {
    const {max, min} = Math;
    const minMaxPairs = sets.map(set => [max(...set), min(...set)]);

 return max(...minMaxPairs.reduce((accumulator, current) => [
            min(...accumulator) * max(...current),
            min(...accumulator) * min(...current),
            max(...accumulator) * min(...current),
            max(...accumulator) * max(...current),
        ]
    ))
}


describe("Basic tests", function () {
    it('should ', function () {
        expect(solve([[1, 2], [3, 4]])).toEqual(8);
        expect(solve([[10, -15], [-1, -3]])).toEqual(45);
        expect(solve([[-1, 2, -3, 4], [1, -2, 3, -4]])).toEqual(12);
        expect(solve([[-11, -6], [-20, -20], [18, -4], [-20, 1]])).toEqual(17600);
        expect(solve([[14, 2], [0, -16], [-12, -16]])).toEqual(3584);
        expect(solve([[-3, -4], [1, 2, -3]])).toEqual(12);
    });

});
