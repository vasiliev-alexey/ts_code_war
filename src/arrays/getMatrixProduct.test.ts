function getMatrixProduct(a, b) {



    const calcRow = (r, c) => {
        console.log("calc", r, c)
        return r.reduce((a, v, i) => a + r[i] * c[i], 0);
    }

    if (a[0].length != b.length) {
        return -1;
    }


    let rez = Array.from(Array(a.length), () => new Array(b[0].length));

    for (let i = 0; i < rez.length; i++) {

        for (let c = 0; c < rez.length; c++) {


            let col = [];
            for (let j = 0; j < a[i].length; j++) {
                //    console.log("push", i , j)
                col.push(b[j][c]);
            }
            let val = calcRow(a[i], col);
            if (!Object.is(val, NaN)) rez[i][c] = val;

        }

    }

    console.log(rez)
    return rez;
};


describe("Test.", function () {
    it("Should handle multiplication of ", function () {

        ///
        expect(getMatrixProduct([[1, 2, 2], [3, 1, 1]

        ], [[4, 2], [3, 1], [1, 5]])).toEqual([[12, 14], [16, 12]]);


        expect(getMatrixProduct([[4, 2], [3, 1], [1, 5]], [[1, 2, 2], [3, 1, 1]

        ])).toEqual([[10, 10, 10], [6, 7, 7], [16, 7, 7]]);

        expect(getMatrixProduct([[7, 3], [2, 5], [6, 8], [9, 0]], [[7, 4, 9], [8, 1, 5]])).toEqual([[73, 31, 78], [54, 13, 43], [106, 32, 94], [63, 36, 81]]);

    });
});


describe("Testing matrix multiplier.", function () {
    it("Should handle multiplication of 1x1 matrices.", function () {
        expect(getMatrixProduct([[2]], [[3]])).toEqual([[6]]);
    });
    it("Should handle multiplication of 2x2 matrices.", function () {
        expect(getMatrixProduct([[1, 2], [3, 4]], [[5, 6], [7, 8]])).toEqual([[19, 22], [43, 50]]);
    });
    it("Should handle multiplication of matrices including decimals.", function () {
        expect(getMatrixProduct([[0.5, 1], [1.5, 2]], [[0.2, 0.4], [0.6, 0.8]])).toEqual([[0.7, 1.0], [1.5, 2.2]]);
    });
    it("Should return -1 if matrices cannot be multiplied.", function () {
        expect(getMatrixProduct([[1, 2], [3, 4]], [[2, 4]])).toEqual(-1);
    });
});


/* Matrix Multiplier
https://www.codewars.com/kata/573248f48e531896770001f9/train/javascript
In mathematics, a matrix (plural matrices) is a rectangular array of numbers. Matrices have many applications in programming, from performing transformations in 2D space to machine learning.

One of the most useful operations to perform on matrices is matrix multiplication, which takes a pair of matrices and produces another matrix – known as the dot product. Multiplying matrices is very different to multiplying real numbers, and follows its own set of rules.

Unlike multiplying real numbers, multiplying matrices is non-commutative: in other words, multiplying matrix a by matrix b will not give the same result as multiplying matrix b by matrix a.

Additionally, not all pairs of matrix can be multiplied. For two matrices to be multipliable, the number of columns in matrix a must match the number of rows in matrix b.

There are many introductions to matrix multiplication online, including at Khan Academy, and in the classic MIT lecture series by Herbert Gross.

To complete this kata, write a function that takes two matrices - a and b - and returns the dot product of those matrices. If the matrices cannot be multiplied, return -1 for JS/Python, or null for Java.

Each matrix will be represented by a two-dimensional list (a list of lists). Each inner list will contain one or more numbers, representing a row in the matrix.

For example, the following matrix:

|1 2|
|3 4|

Would be represented as:

[[1, 2], [3, 4]]

It can be assumed that all lists will be valid matrices, composed of lists with equal numbers of elements, and which contain only numbers. The numbers may include integers and/or decimal points.

*/


