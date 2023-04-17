function changer(str ) {
   const vowels =  ['a', 'e', 'i', 'o', 'u'];
    let chars = str.toLowerCase().split("");
   const nextChar = (c ) => {
       if (! /^[A-Za-z]*$/ .test(c)) {
           return c;
       }
       let chNum = c.charCodeAt(0);
       switch (chNum) {
           case  122 : {

               chNum = 97; break;
           }
           default : chNum = chNum +1
       }
     let  letter = String.fromCharCode(chNum);
       if(vowels.includes(letter)) {
           letter = letter.toUpperCase();
       }
       return  letter;
   }
    return  chars.map(   nextChar ).join("")
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Change it up",() =>{
    it("Sample tests", () => {
        assert.strictEqual(changer('Cat30'), 'dbU30');
        assert.strictEqual(changer('Alice'), 'bmjdf');
        assert.strictEqual(changer('sponge1'), 'tqpOhf1');
        assert.strictEqual(changer('Hello World'), 'Ifmmp xpsmE');
        assert.strictEqual(changer('dogs'), 'Epht');
        assert.strictEqual(changer('z'), 'A');
    })
});

