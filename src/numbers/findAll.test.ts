function findAll(n, k) {

    let r = 0;
    let min = 0;
    let max = 0;
    for (let i = Math.pow(10, k - 1); i < Math.pow(10, k); i++) {
           let tmp = i.toString().split('');
        if (tmp.reduce((a, e) => a + (+e), 0) == n) {
            if (tmp.map((a, ind, arr) => a >= arr[ind - 1]).filter(e => !e).length == 1) {
                r += 1;
                if(r ==1) {
                    min = i;
                }
                max = i > max ? i : max;
            }
        }
    }
    if (r == 0) {
        return [];
    }
    return [r , min.toString(), max.toString()];



}


describe("Example Tests", function () {
    it("Simple Cases", function () {
        expect(findAll(10, 3)).toEqual([8, '118', '334']);
        expect(findAll(27, 3)).toEqual([1, '999', '999']);
        expect(findAll(84, 4)).toEqual([]);
        expect(findAll(35, 6)).toEqual([123, '116999', '566666'])

    });
});


/* How many numbers III?
https://www.codewars.com/kata/5877e7d568909e5ff90017e6/train/javascript

We want to generate all the numbers of three digits where:

the sum of their digits is equal to 10
their digits are in increasing order (the numbers may have two or more equal contiguous digits)
The numbers that fulfill these constraints are: [118, 127, 136, 145, 226, 235, 244, 334]. There're 8 numbers in total with 118 being the lowest and 334 being the greatest.

Task
Implement a function which receives two arguments:

the sum of digits (sum)
the number of digits (count)
This function should return three values:

the total number of values which have count digits that add up to sum and are in increasing order
the lowest such value
the greatest such value
Note: if there're no values which satisfy these constaints, you should return an empty value (refer to the examples to see what exactly is expected).

Examples
findAll(10, 3)  =>  [8, "118", "334"]
findAll(27, 3)  =>  [1, "999", "999"]
findAll(84, 4)  =>  []
Features of the random tests:

Number of tests: 112
Sum of digits value between 20 and 65
Amount of digits between 2 and 17


*/


/*

* */
