export function determinant(m: number[][]): number {
    // return the determinant of the matrix passed in
    if (m.length == 1) {
        return m[0][0];
    } else if (m.length == 2) {
        return m[0][0] * m[1][1] - m[0][1] * m[1][0];
    }
    return   m[0].reduce((a, e, i) => a + (i % 2 ? -1 : 1) * e * determinant(m.filter((r, ind) => ind != 0).map(int => int.filter((_, ind) => ind != i))), 0)
    //let rowResolve = m[0];
   // let rez = 0;


    // for (let i = 0; i < rowResolve.length; i++) {
    //     let calcArr = m.filter((r, ind) => ind != 0).map(e => e.filter((_, ind) => ind != i));
    //     rez = rez + (i % 2 ? -1 : 1) * rowResolve[i] * determinant(calcArr)
    // }



    // вычислить дискриминант
 //   console.log(rez);
//    return rez
}


describe("determinant", function () {
    const m1 = [[1, 3], [2, 5]];
    const m2 = [[2, 5, 3],
        [1, -2, -1],
        [1, 3, 4]];

    it("of a 1 x 1 matrix should yield the value of the one element", () => {
        expect(determinant([[1]])).toEqual(1);
    });

    it("should work correctly for 2 x 2 matrix", () => {
        expect(determinant(m1)).toEqual(-1);
    });

    it("should work correctly for 3 x 3 matrix", () => {
        expect(determinant(m2)).toEqual(-20);
    });

    it("should work correctly for 4 x 4 matrix", () => {
        expect(determinant(
            [[1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 1, 2, 3],
                [4, 5, 6, 9]
            ]
        )).toEqual(-72);
    });

});


/* Matrix Determinant
https://www.codewars.com/kata/52a382ee44408cea2500074c/train/typescript
Write a function that accepts a square matrix (N x N 2D array) and returns the determinant of the matrix.

How to take the determinant of a matrix -- it is simplest to start with the smallest cases:

A 1x1 matrix |a| has determinant a.

A 2x2 matrix [ [a, b], [c, d] ] or

|a  b|
|c  d|

has determinant: a*d - b*c.

The determinant of an n x n sized matrix is calculated by reducing the problem to the calculation of the determinants of n matrices ofn-1 x n-1 size.

For the 3x3 case, [ [a, b, c], [d, e, f], [g, h, i] ] or

|a b c|
|d e f|
|g h i|

the determinant is: a * det(a_minor) - b * det(b_minor) + c * det(c_minor) where det(a_minor) refers to taking the determinant of the 2x2 matrix created by crossing out the row and column in which the element a occurs:

|- - -|
|- e f|
|- h i|

Note the alternation of signs.

The determinant of larger matrices are calculated analogously, e.g. if M is a 4x4 matrix with first row [a, b, c, d], then:

det(M) = a * det(a_minor) - b * det(b_minor) + c * det(c_minor) - d * det(d_minor)

*/
