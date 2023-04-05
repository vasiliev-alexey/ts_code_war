export function persistence(num: number): number {

    if (num < 10) {
        return 0;
    }
    let n = num;
    let i = 0;

    while (n >= 10) {
        i = i + 1;
        let num_chars = n.toString().split("");
        n = 1;

        for (let x of num_chars) {
            n = n * (+x);
        }
    }
    return  i


}


import {assert} from "chai";


describe("Persistent Bugger.", () => {
    it("Fixed tests", () => {
        assert.strictEqual(persistence(39), 3);
        assert.strictEqual(persistence(4), 0);
        assert.strictEqual(persistence(25), 2);
        assert.strictEqual(persistence(999), 4);
    });
});


function sumEvenNumbers(input : number[]) {
    return input.filter( v => v%2 == 0).reduce( (a ,b) => a+b)
}


describe("Tests", () => {
    it("test", () => {
        assert.strictEqual(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 30);
    });
});
