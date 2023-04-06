function transpose(matrix: number[][]) {
    let rowCnt = matrix[0].length;
    let colCnt = matrix.length;
    let res = [];
    for (let i = 0; i < rowCnt; i++) {
        let row = [];
        for (let j = 0; j < colCnt; j++) {
            row.push(matrix[j][i]);
        }
        res.push(row);
    }
    return res
}


const chai = require("chai");
const assert = chai.assert;


describe("Tests", () => {
    it("test", () => {
        assert.deepEqual(transpose([[1]]), [[1]]);
        assert.deepEqual(transpose([[1, 2, 3], [4, 5, 6]]), [[1, 4], [2, 5], [3, 6]]);
    });
});
