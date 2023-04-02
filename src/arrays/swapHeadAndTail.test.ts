function swapHeadAndTail(arr: number[]): number[] {
    return arr.length % 2 == 0 ? arr.slice(arr.length / 2).concat(arr.slice(0, arr.length / 2)) : arr.slice(arr.length / 2 + 1).concat([arr[Math.floor(arr.length / 2)], ...arr.slice(0, arr.length / 2)]);
}


describe("Basic tests", () => {
    it('should ', function () {
        //  expect(swapHeadAndTail([ -1, 2 ])).toEqual( [ 2, -1 ]);
        expect(swapHeadAndTail([1, 2, 3, 4, 5])).toEqual([4, 5, 3, 1, 2]);

        //expect(swapHeadAndTail([ 1, 2, -3, 4, 5, 6, -7, 8 ])).toEqual( [ 5, 6, -7, 8, 1, 2, -3, 4 ]);
    });

});


function mergeArrays(a, b) {
    let res = [];
    for (let i = 0; i < Math.max(a.length, b.length); i++) {

        if (a[i]) {
            res.push(a[i])
        }
        if (b[i]) {
            res.push(b[i])
        }
    }
    return res
}

describe('Static Tests', function () {

    it('Passes if arrays are equals', function () {

        expect(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e'])).toEqual( [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8]);
        expect(mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5])).toEqual( ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5]);
        expect(mergeArrays([2, 5, 8, 23, 67, 6], ['b', 'r', 'a', 'u', 'r', 's'])).toEqual( [2, 'b', 5, 'r', 8, 'a', 23, 'u', 67, 'r', 6, 's']);
        expect(mergeArrays(['b', 'r', 'a', 'u', 'r', 's', 'e', 'q', 'z'], [2, 5, 8, 23, 67, 6])).toEqual( ['b', 2, 'r', 5, 'a', 8, 'u', 23, 'r', 67, 's', 6, 'e', 'q', 'z']);
    });
});
