function countZeroRowsAndColumns(arr1, arr2) {
    const numRows = arr1.length;

    // compute the sum array and zero counts for rows and columns
    const sumArr = arr1.map((row, i) => row.map((val, j) => val + arr2[i][j]));
    const zeroRows = sumArr.reduce((count, row) => count + Number(row.every(val => val === 0)), 0);
    const zeroCols = sumArr[0].reduce((count, _, j) => {
        let allZero = true;
        for (let i = 0; i < numRows; i++) {
            if (sumArr[i][j] !== 0) {
                allZero = false;
                break;
            }
        }
        return count + Number(allZero);
    }, 0);
    return zeroRows + zeroCols
}

function countZeroRowsAndColumns1(arr1, arr2) {
    let numRows = arr1.length;
    const numCols = arr1[0].length;
    let dirty_cols = [];
    let dirty_rows = [];
    let result = 0;

    // compute the sum array
    const sumArr = [];
    for (let i = 0; i < numRows; i++) {
        sumArr.push([]);
        for (let j = 0; j < numCols; j++) {
            let sum = arr1[i][j] + arr2[i][j];
            sumArr[i].push(sum);

            if(sum !=0) {
                dirty_cols.push(j)
            }


        }
    }


    // count zero rows
    for (let i = 0; i < numRows; i++) {
        if (sumArr[i].every(val => val == 0)) {
            result++;
            dirty_rows.push(i);
          //  sumArr.splice(i, 1)
        }
    }

    for (let dirtyRow of dirty_rows) {
        sumArr.splice(dirtyRow, 1)
    }


     for (let j = 0; j < numCols; j++) {

        let allZero = true;
        for (let i = 0; i < sumArr.length; i++) {
            if (sumArr[i][j] !== 0) {
                allZero = false;
                break;
            }
        }
        if (allZero) {
            result++;
        }
    }
    return result
}

function countZeroRowsAndColumns2(arr1: number[][], arr2: number[][]): number {

    let result = 0;
    let dirty_cols = [];
    let dirty_rows = [];

    // fill rez
    for (let i = 0; i < arr1.length; i++) {
        // cols
        for (let j = 0; j < arr1[0].length; j++) {
            if (dirty_cols.includes(j)) {
                break;
            }

            if ((arr1[i][j] + arr2[i][j]) != 0) {
                dirty_cols.push(j);
                dirty_rows.push(i)
            }

        }

    }



    result = arr1.length - dirty_rows.filter((c, i, ar) => i == ar.lastIndexOf(c)).length +
        arr1[0].length - dirty_cols.filter((c, i, ar) => i == ar.lastIndexOf(c)).length;

    return result;

}

//https://www.codewars.com/kata/584425e1101928a1bc00003b/train/javascript
describe("Basic Tests", function () {
    it("It should works for basic tests", function () {

        var arr1 = [
                [1, 3, -5],
                [2, -4, 6]],
            arr2 = [
                [-1, -3, 5],
                [-2, -4, -6]]
        expect(countZeroRowsAndColumns(arr1, arr2)).toEqual(3)

        arr1 = [
            [1, 1],
            [1, 1]]
        arr2 = [
            [-1, -1],
            [10, 9]]
       expect(countZeroRowsAndColumns(arr1, arr2)).toEqual(1)

        arr1 = [
            [1, 2, 3],
            [4, 5, 6]]
        arr2 = [
            [-1, -2, -3],
            [-4, -5, -6]]
       expect(countZeroRowsAndColumns(arr1, arr2)).toEqual(5)




    })
})
