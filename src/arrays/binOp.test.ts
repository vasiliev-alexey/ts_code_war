type BinOp = (a: number, b: number) => number

export const gcdi = (a: number, b: number) => (b === 0 ? Math.abs(a) : gcdi(b, a % b));
export const lcmu = (a: number, b: number) => Math.abs(a * b) / gcdi(a, b);
export const som = (a: number, b: number): number => a + b
export const maxi = (a: number, b: number): number => Math.max(a, b)
export const mini = (a: number, b: number): number =>
return Math.min(a, b)

export const operArray = (fct: BinOp, arr: number[], init: number): number[] => {
    let res = [];
    let tmb = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            tmb = fct(init, arr[i]);
            res.push(tmb)
        } else {
            tmb = fct(tmb, arr[i]);
            res.push(tmb)
        }
    }
    return res
}


import chai, {assert} from "chai";

chai.config.truncateThreshold = 0;

function testing(actual: any, expected: any) {
    assert.deepEqual(actual, expected);
}

describe("Fixed Tests gcdi, lcmu, som, mini, maxi", function () {
    it("Basic tests", function () {
        let a = [18, 69, -90, -78, 65, 40];
        let r = [18, 3, 3, 3, 1, 1];
        let op = operArray(gcdi, a, a[0]);
        testing(op, r);
        r = [18, 414, 2070, 26910, 26910, 107640];
        op = operArray(lcmu, a, a[0]);
        testing(op, r);
        r = [18, 87, -3, -81, -16, 24];
        op = operArray(som, a, 0);
        testing(op, r);
        r = [18, 18, -90, -90, -90, -90];
        op = operArray(mini, a, a[0]);
        testing(op, r);
        r = [18, 69, 69, 69, 69, 69];
        op = operArray(maxi, a, a[0]);
        testing(op, r);
    });
});
