function computeDepth(n: number): number {

    let arr : string[] =    [];
    let step = 1;

    while (arr.length !== 10) {

       (n * step).toString().split('').forEach( e =>
           {
               if( !arr.includes(e)) {
                   arr.push(e);
               }
           }
       )

        step+=1;
    }
return  step-1


}


import {assert} from "chai";

describe('Sample Tests', function () {
    it('Sample Tests', function () {
        assert.equal(computeDepth(42), 9);
        assert.equal(computeDepth(1), 10);
        assert.equal(computeDepth(125), 72);
        assert.equal(computeDepth(1234567890), 1);
    });
});
// https://www.codewars.com/kata/59b401e24f98a813f9000026/train/typescript

/*
The depth of an integer n is defined to be how many multiples of n it is necessary to compute before all 10 digits have appeared at least once in some multiple.

example:

let see n=42

Multiple         value         digits     comment
42*1              42            2,4
42*2              84             8         4 existed
42*3              126           1,6        2 existed
42*4              168            -         all existed
42*5              210            0         2,1 existed
42*6              252            5         2 existed
42*7              294            9         2,4 existed
42*8              336            3         6 existed
42*9              378            7         3,8 existed
Looking at the above table under digits column you can find all the digits from 0 to 9, Hence it required 9 multiples of 42 to get all the digits. So the depth of 42 is 9. Write a function named computeDepth which computes the depth of its integer argument.Only positive numbers greater than zero will be passed as an input.


* */
