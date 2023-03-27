function shortcut (string : string) {
    return string.split("").filter( c => !["a", "e", "i", "o", "u" ].includes(c)).join("");
}


const strictEqual = require('chai').assert.strictEqual;

function doTest (input, expected) {
    const actual = shortcut(input);
    strictEqual(actual, expected, `for "${input}":\n`);
}

describe("Sample Tests", () => {
    it("Should pass sample tests", () => {
        doTest('hello', 'hll');
        doTest('how are you today?', 'hw r y tdy?');
        doTest('complain', 'cmpln');
        doTest('never', 'nvr');
    });
});


function isVow(a){
    //console.log("d" , String.fromCharCode(a[1]));
return a.map( n =>  !["a", "e", "i", "o", "u" ].includes(String.fromCharCode(n))  ?  n : String.fromCharCode(n) )
}

describe("Basic tests",() =>{
    it('should ', function () {
        expect(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106])).toEqual([118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]);
        expect(isVow([101,121,110,113,113,103,121,121,101,107,103])).toEqual(["e",121,110,113,113,103,121,121,"e",107,103]);
    });

});


function wordSearch(word : string, text:string){

    return   text.split(/([_\W])/).includes(word)
}


const myText = "what makes the desert beautiful, said the little prince is that somewhere it hides a well";

describe("Fixed Tests (new)", () => {
    it("Tests", () => {
        expect(wordSearch("desert",myText)).toEqual(true);
        expect(wordSearch("blue",myText)).toEqual(false);
        expect(wordSearch("well",myText)).toEqual(true);
        expect(wordSearch("house",myText)).toEqual(false);
        expect(wordSearch("beautiful",myText)).toEqual(true);
        expect(wordSearch("prince",myText)).toEqual(true);
        expect(wordSearch("le prince",myText)).toEqual(false);
    });
});


function convert(number){

    return  number.toString().split("").map( ( c , i , a  ) =>   i%2 ==1 ?  String.fromCharCode( +(a[i-1]+a[i])): null )
        .filter( c => c !== null).join("")


    // ...Convert integers given as string into ASCII uppercase letters...
}



  const chai = require("chai");
  const assert = chai.assert;
// chai.config.truncateThreshold = 0;

describe("Basic test", () => {
    it("tests", () => {
       // assert.strictEqual(convert("65"),"A")
     //   assert.strictEqual(convert("656667"),"ABC")
       // assert.strictEqual(convert("676584"),"CAT")
        assert.strictEqual(convert("73327673756932858080698267658369"),"I LIKE UPPERCASE")
    });
});



function chuckPushUps(string) {
    if (typeof string !== 'string' || string === '') return 'FAIL!!';

    if (/[01]/.test(string))
        return Math.max(
            ...string
                .split(' ')
                .map((val) => val.replace(/[^01]/g, ''))
                .map((val) => parseInt(val, 2))
                .filter((val) => !isNaN(val))
        );

    return 'CHUCK SMASH!!';
}

describe("Example tests",() =>{
    it('should ', function () {
        expect(chuckPushUps('1 "Chuck" 10 "Stop that!" 11 "Your vest looks stupid" 100 101 110')).toEqual( 6);
        expect(chuckPushUps('1000 "Did you kick someone in the face today?" 1001 1010 "Will I be making dinner then?!" 1011 110')).toEqual( 11);
        expect(chuckPushUps('10000 "Nice Beard" 1111 "Are you wearing denim shorts?" 1110 1101')).toEqual( 16);
        expect(chuckPushUps('')).toEqual( 'FAIL!!');
        expect(chuckPushUps([])).toEqual( 'FAIL!!');
        expect(chuckPushUps(1)).toEqual('FAIL!!');

    });

});
