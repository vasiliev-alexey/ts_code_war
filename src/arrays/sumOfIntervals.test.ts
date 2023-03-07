export function sumOfIntervals(intervals: [number, number][]): number {
    if (intervals.length < 2) {
        return intervals[0][1] - intervals[0][0];
    }

    intervals = intervals.sort((a, b) => a[0] - b[0]);
    let rez = [intervals[0]];

    intervals.map(interval => {
        let recent = rez[rez.length - 1];
        if (recent[1] >= interval[0]) {
            recent[1] = Math.max(recent[1], interval[1])
        } else {
            rez.push(interval);
        }
    })
    return rez.map(e => e[1] - e[0]).reduce((a, e) => a + e);
}


import {assert} from "chai";


describe("Sum of intervals", function () {
    it("basic tests", function () {
        assert.strictEqual(sumOfIntervals([[1, 5]]), 4);
        assert.strictEqual(sumOfIntervals([[1, 5], [6, 10]]), 8);
        assert.strictEqual(sumOfIntervals([[1, 5], [1, 5]]), 4);
        assert.strictEqual(sumOfIntervals([[1, 4], [7, 10], [3, 5]]), 7);
    });

    it("large numbers", function () {
        assert.strictEqual(sumOfIntervals([[-1e9, 1e9]]), 2e9);
        assert.strictEqual(sumOfIntervals([[0, 20], [-1e8, 10], [30, 40]]), 1e8 + 30);
    });
});


/* Sum of Intervals
Write a function called sumIntervals/sum_intervals that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.
Intervals

Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.
Overlapping Intervals

List containing overlapping intervals:

[
   [1, 4],
   [7, 10],
   [3, 5]
]

The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.
Examples:

sumIntervals( [
   [1, 2],
   [6, 10],
   [11, 15]
] ) => 9

sumIntervals( [
   [1, 4],
   [7, 10],
   [3, 5]
] ) => 7

sumIntervals( [
   [1, 5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ) => 19

sumIntervals( [
   [0, 20],
   [-100000000, 10],
   [30, 40]
] ) => 100000030

Tests with large intervals

Your algorithm should be able to handle large intervals. All tested intervals are subsets of the range [-1000000000, 1000000000].

https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/typescript
*/
