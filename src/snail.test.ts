const snail = function (array: number[][]) : number[] {
    const size = array.length;
    if (size == 0) return [];
    if (size == 1) return array[0];
    const top = array[0].slice(0, -1);

    const right = array.slice(0, -1).map((a) => {
        return a[a.length - 1];
    });
    const bottom = array[size - 1].slice(1).reverse();
    const left = array
        .slice(1)
        .map((a) => a[0])
        .reverse();
    const inner = array.slice(1, -1).map((a) => a.slice(1, -1));
    const rez  = [];
    return rez.concat(top, right, bottom, left, snail(inner));

}


describe("Tests", () => {
    it("test", () => {
        expect(snail([[]])).toEqual( []);
        expect(snail([[1]])).toEqual( [1]);
        expect(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual( [1, 2, 3, 6, 9, 8, 7, 4, 5]);
        expect(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]])).toEqual( [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
        expect(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]])).toEqual( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);
    });
});

/* Snail
https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript

Snail Sort

Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]

For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]

This image will illustrate things more clearly:

NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].


**/


function joinStrings(string1, string2){
    return `${string1} ${string2}`
}


describe("add", () => {
    it("should work for sample tests", () => {
        expect(joinStrings('string1', 'string2')).toEqual( 'string1 string2');
        expect(joinStrings('testing', 'testing')).toEqual( 'testing testing');
        expect(joinStrings(134, 234)).toEqual( '134 234');
    });
});
