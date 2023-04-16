function chmodCalculator(perm : Record<string, string>) {


    const char2num = (c) : number => {
        switch (c) {
            case "r" : return  4;
            case "w" : return  2;
            case "x" : return  1;
            default: return  0;
        }
    }
   return      ["user" , "group", "other"].map( v=> perm[v] || "").map( e => e.split``.map(char2num).reduce((a   , b) => a+b , 0)).join("")


}


const {strictEqual} = require('chai').assert;

describe("tests suite",() =>{
    it('sample tests', () => {
        strictEqual(chmodCalculator({user: 'rwx', group: 'r-x', other: 'r-x'}),"755");
        strictEqual(chmodCalculator({user: 'rwx', group: 'r--', other: 'r--'}),"744");
        strictEqual(chmodCalculator({user: 'r-x', group: 'r-x', other: 'r-x'}),"555");
        strictEqual(chmodCalculator({group: 'rwx'}),"070");
    });
});
