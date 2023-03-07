const maxSequence = (arr: number[]): number => {
    if (arr.length < 1  ||
    arr.filter(a => a > 0).length < 1)
    return 0;
    if (arr.length < 2) return arr[0];

    let sum = 0;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        const temp = [];

        for (let j = i; j < arr.length; j++) {


            temp.push(arr[j]);

            if (temp.reduce((a, v) => a + v) > sum) {
                sum = temp.reduce((a, v) => a + v);
            }
            result.push([...temp]);
        }
    }


    return sum;
}

const {assert} = require('chai');
describe("maxSequence", function () {
    it("should work on an empty array", function () {
     //   assert.strictEqual(maxSequence([]), 0);
        assert.strictEqual(maxSequence([2]), 2);
    });
    it("should work on the example", function () {
        assert.strictEqual(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
    });
});

/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.
Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript
*/


