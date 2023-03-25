

function howMuchWater(water, load, clothes) : "Not enough clothes"| "Too much clothes" | number {
    // Insert your brilliant code here
    if (clothes  > load *2) {
        return "Too much clothes"
    }

    if (clothes  <  load) {
        return  "Not enough clothes"
    }
    return  Math.round(water * Math.pow(1.1 ,  (clothes - load) ) *100)/100


}


describe('Static tests', function(){
    it('Should work for static tests', function(){
        expect(howMuchWater(10,10,21)).toEqual( 'Too much clothes');
        expect(howMuchWater(10,10,2)).toEqual( 'Not enough clothes');
        expect(howMuchWater(10,11,20)).toEqual( 23.58);
        expect(howMuchWater(50,15,29)).toEqual( 189.87);
    });
})
//https://www.codewars.com/kata/575fa9afee048b293e000287/train/javascript
/*
How much water do I need?
My washing machine uses water amount of water to wash load (in JavaScript and Python) or max_load (in Ruby) amount of clothes. You are given a clothes amount of clothes to wash. For each single item of clothes above the load, the washing machine will use 10% more water (multiplicative) to clean.

For example, if the load is 10, the amount of water it requires is 5 and the amount of clothes to wash is 14, then you need 5 * 1.1 ^ (14 - 10) amount of water.

Write a function howMuchWater (JS)/how_much_water (Python and Ruby) to work out how much water is needed if you have a clothes amount of clothes. The function will accept 3 arguments: - water, load (or max_loadin Ruby) and clothes.

My washing machine is an old model that can only handle double the amount of load (or max_load). If the amount of clothes is more than 2 times the standard amount of load (max_load), return 'Too much clothes'. The washing machine also cannot handle any amount of clothes less than load (max_load). If that is the case, return 'Not enough clothes'.

The answer should be rounded to the nearest 2 decimal places.*/

class Class {

    static  t : number = 0.5

    static getNumber() {
        return Class.t *=2;
    }
}


describe("Tests suite", function() {
    const { strictEqual } = require('chai').assert;

    it("sample tests", function() {
        strictEqual(Class.getNumber(),  1, "1st call should return 1");
        strictEqual(Class.getNumber(),  2, "2nd call should return 2");
        strictEqual(Class.getNumber(),  4, "3rd call should return 4");
        strictEqual(Class.getNumber(),  8, "4th call should return 8");
        strictEqual(Class.getNumber(), 16, "5th call should return 16");
    });
});


// https://www.codewars.com/kata/56a24b4d9f3671584d000039/train/javascript
function doubleCheck(str){
     // return str.toLowerCase().split("").map(  (c, i, ar) => c == ar[i+1]).filter( v => v).length > 0
     return str.toLowerCase().split("").some(  (c, i, ar) => c == ar[i+1])

}

describe("Double Check", function() {
    it("Example tests", function() {
       expect(doubleCheck("abca")).toEqual( false);
       expect(doubleCheck("aabc")).toEqual( true);
       expect(doubleCheck("a 11 c d")).toEqual( true);
       expect(doubleCheck("AabBcC")).toEqual( true);
       expect(doubleCheck("a b  c")).toEqual( true);
       expect(doubleCheck("a b c d e f g h i h k")).toEqual( false);
    })})


function toAcronym(inp: string){
    return  inp.split(" ").map( w => w.slice(0,1).toUpperCase()).join("")
}

describe("Make acronym", () => {
    it("Sample Tests", () => {

        let tests = [
            ["Code Wars", "CW"],
            ["Water Closet", "WC"],
            ["Portable Network Graphics", "PNG"],
            ["PHP: Hypertext Preprocessor", "PHP"],
            ["hyper text markup language", "HTML"]
        ];
        tests.forEach( ([inp,exp]) => expect( toAcronym(inp)).toEqual( exp ) );
    });
});

