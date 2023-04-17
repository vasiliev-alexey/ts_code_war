export function evaluate(equation: string) {
    const oper =  (a : BigInt ,b : BigInt) =>    (a + b) + (a - b) + (a * b) + (a / b)
    let  args = equation.split("@").filter( v=> v !== "@").map( v => +v)
    console.log("args" , args)
    let begin =BigInt(args[0]);
    for (let i = 1; i < args.length; i++) {

        if(args[i] ==0) {
            return null;
        }
        begin = oper(begin ,  (args[i]));
    }
    return  begin

}

import { assert } from "chai";



describe("Fixed tests:", function() {
    it("tests:", function() {
        const tests: [string, number | null][] = [
            // ['1 @ 1', 4],
            // ['3 @ 2', 13],
            // ['6 @ 9', 66],
            // ['4 @ -4', -9],
            // ['1 @ 1 @ -4', -9],
            // ['2 @ 2 @ 2', 40],
            // ['0 @ 1 @ 2', 0],
            // ['5 @ 0', null],
            // ['17@28', 510],
            ['14@10@39@15@23@12@25@3@3@35@29@12@22@13@35@11', 89314879270726250000] // 91287800544714830000
        ];
        tests.forEach((el: [string, number | null]) => {
            assert.strictEqual(evaluate(el[0]), el[1]);
        });
    });
});
