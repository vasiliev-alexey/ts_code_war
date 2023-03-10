function explode(x: [string | number, string | number]): "Void!" | [string | number, string | number][] {

 k
}

describe("Array Array Array", () => {
    it("Testing for fixed tests", () => {

       expect(explode(['a', 'b'])).toEqual('Void!');
         expect(explode(["a", 0])).toEqual([]);
          expect(explode([9, 3])).toEqual( [[9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3]]);
           expect(explode(['a', 3])).toEqual( [['a', 3], ['a', 3], ['a', 3]] );
           expect(explode([6, 'c'])).toEqual( [[6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c']]);
        //
         expect(explode(["a", 0])).toEqual( []);
    })
});

/* Array Array Array
https://www.codewars.com/kata/57eb936de1051801d500008a/train/javascript
You are given an initial 2-value array (x). You will use this to calculate a score.

If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

For example:

if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].

*/
