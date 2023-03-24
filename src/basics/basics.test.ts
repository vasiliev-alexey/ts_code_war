function toBcd(number){
   return   number.toString().split("").map( e=>e == "-"? e: `${(+e).toString(2).padStart(4,'0')}`).join(" ").replace("- 0" , '-0')

    // return   number.toString().split("").map(  e => {
    //     console.log((+e).toString(2), e)
    //     return e.toString();
    // })
}


const {strictEqual} = require('chai').assert;

describe("Tests", () => {
    it("sample tests", () => {
        //strictEqual( toBcd(10), "0001 0000")
      //  strictEqual( toBcd(-10), "-0001 0000")
        strictEqual( toBcd(300), "0011 0000 0000")
    });
});

//https://www.codewars.com/kata/5521d84b95c172461d0000a4/train/javascript

/* Binary Coded Decimal
Convert a number to a binary coded decimal (BCD).

You can assume input will always be an integer. If it is a negative number then simply place a minus sign in front of the output string. Output will be a string with each digit of the input represented as 4 bits (0 padded) with a space between each set of 4 bits.

Ex.

n =  10 -> "0001 0000"
n = -10 -> "-0001 0000"
*/

function uniTotal (string: string) {
    return string.split('').map( (e) =>  e.charCodeAt(0)).reduce( (a, e) => a+e)
}
