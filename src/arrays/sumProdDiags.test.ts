function sumProdDiags(matrix: number[][]): number {

    let tlbr_diag = 0;
    let bltr_diag = 0;

    const length = matrix.length;
    let temp = [];
    let k, x, y;
    for (k = 0; k <= 2 * (length - 1); ++k) {
        for (temp = [], y = length - 1; (x = k - y), y >= 0; --y) {
            if (x >= 0 && x < length) {
                temp.push(matrix[y][x])
            }
        }
        if (temp.length > 0) {
            tlbr_diag += temp.reduce((a, b) => a * b)
        }
    }
    temp = [];
    for (k = 0; k <= 2 * (length) - 1; ++k) {
        for (temp = [], y = length - 1; (x = k + y - length), y >= 0; --y) {
            if (x >= 0 && x < length) {
                temp.push(matrix[y][x]);
            }
        }
        if (temp.length > 0) {
            bltr_diag += temp.reduce((a, b) => a * b)
        }

    }
    return bltr_diag - tlbr_diag
}


// See https://www.chaijs.com for how to use Chai.
import {assert} from "chai";


describe("Basic Tests", function () {
    it("Small Matrices", function () {

        // let M1 = [
        //     [0, 2, 5],
        //     [1, 4, 7],
        //     [3, 6, 8,]
        // ];
        // assert.strictEqual(sumProdDiags(M1), 1098);

        let M1 = [
            [1, 4, 7, 6, 5],
            [-3, 2, 8, 1, 3],
            [6, 2, 9, 7, -4],
            [1, -2, 4, -2, 6],
            [3, 2, 2, -4, 7]
        ];
        assert.strictEqual(sumProdDiags(M1), 1098);
        //
        // let M2 = [
        //     [1, 4, 7, 6],
        //     [-3, 2, 8, 1],
        //     [6, 2, 9, 7],
        //     [1, -2, 4, -2]
        // ];
        // assert.strictEqual(sumProdDiags(M2), -11);
        //
        // let M3 = [
        //     [1, 2, 3, 2, 1],
        //     [2, 3, 4, 3, 2],
        //     [3, 4, 5, 4, 3],
        //     [4, 5, 6, 5, 4],
        //     [5, 6, 7, 6, 5]
        // ];
        // assert.strictEqual(sumProdDiags(M3), 0);
    });
});
