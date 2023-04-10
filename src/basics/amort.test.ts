export function amort(r: number, b: number, t: number, n: number): string {

 //   function amort(r, b, t, n) {
    r /= 1200;
    let c = (r * b) / (1 - (1 + r) ** -t);
    for (let m = 1; m < n; m++) b -= c - r * b;
    return `num_payment ${n.toFixed(0)} c ${c.toFixed(0)} princ ${(
        c -
        r * b
    ).toFixed(0)} int ${(r * b).toFixed(0)} balance ${(b - (c - r * b)).toFixed(
        0
    )}`;

}

import { assert } from "chai";

//https://www.codewars.com/kata/59c68ea2aeb2843e18000109/train/typescript
describe("amort", function() {

    function testing(rate: number, balance: number, term: number, paymentNo: number, exp: string) {
        let ans = amort(rate, balance, term, paymentNo);
        assert.equal(ans, exp);
    }
    it("Basic tests1", function() {
        testing(7.4, 10215, 24, 20, "num_payment 20 c 459 princ 445 int 14 balance 1809");
        testing(7.9, 107090, 48, 41, "num_payment 41 c 2609 princ 2476 int 133 balance 17794");
        testing(6.8, 105097, 36, 4, "num_payment 4 c 3235 princ 2685 int 550 balance 94447");

    });
});

