export function smallest(n: number): number[] {

    let nums = n.toString().split("").map(e => +e);
    let rez = [];


    for (let i = 0; i < nums.length; i++) {
        let curNum = nums[i];
        let restNums = nums.filter((_, ind) => i != ind)
        for (let j = 0; j < nums.length; j++) {

            if (i != j) {
                let newNum = restNums.slice(0, j).concat(curNum).concat(restNums.slice(j));
                rez.push([parseInt(newNum.join("")), i, j]);
            }
        }
    }
    rez.sort((a, b) => { if (a[0] === b[0]) {
        if (a[1] === b[1]) {
            return a[2] - b[2];
        }
        return a[1] - b[1];
    }
    return a[0] - b[0];
}  )
    if (rez[0][0] == n) {
        return [n, 0, 0]
    }
    return rez[0]
}

//https://www.codewars.com/kata/573992c724fc289553000e95/train/typescript


import chai, {assert} from "chai";


describe("Fixed Tests smallest", function () {
    it("Basic tests", function () {
        // assert.deepEqual(smallest(261235), [126235, 2, 0]);
        // assert.deepEqual(smallest(209917), [29917, 0, 1]);
        // assert.deepEqual(smallest(285365), [238565, 3, 1]);
        // assert.deepEqual(smallest(269045), [26945, 3, 0]);
        // assert.deepEqual(smallest(296837), [239687, 4, 1]);

       // assert.deepEqual(smallest(3309502), [330952, 5, 0]);
        assert.deepEqual(smallest(2282992),  [ 2228299, 6, +0 ]);




    });
});

