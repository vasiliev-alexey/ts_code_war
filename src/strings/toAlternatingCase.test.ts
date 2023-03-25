export function toAlternatingCase(s: string): string {
    return s.split("").map(c => c.toUpperCase() == c ? c.toLowerCase() : c.toUpperCase()).join("");
}


import {assert} from "chai";

describe("Sample Test Cases", function () {
    it("Should return a revesed case value", function () {
        assert.equal(toAlternatingCase("hello world"), "HELLO WORLD");
        assert.equal(toAlternatingCase("HeLLo WoRLD"), "hEllO wOrld");
        assert.equal(toAlternatingCase("1a2b3c4d5e"), "1A2B3C4D5E");
    });
});

// https://www.codewars.com/kata/56efc695740d30f963000557/train/typescript

/*
altERnaTIng cAsE <=> ALTerNAtiNG CaSe
Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

toAlternatingCase("hello world") === "HELLO WORLD"
toAlternatingCase("HELLO WORLD") === "hello world"
toAlternatingCase("hello WORLD") === "HELLO world"
toAlternatingCase("HeLLo WoRLD") === "hEllO wOrld"
toAlternatingCase("12345")       === "12345"                   // Non-alphabetical characters are unaffected
toAlternatingCase("1a2b3c4d5e")  === "1A2B3C4D5E"
toAlternatingCase("String.prototype.toAlternatingCase") === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
As usual, your function/method should be pure, i.e. it should not mutate the original string.


* */


function randomCase(x) {
// Code your solution here
    return x.split("").map(c => Math.trunc(Math.random() * 10 / 2) % 2 == 0 ? c.toLowerCase() : c.toUpperCase()).join("")
}

describe("Tests", () => {
    it("test", () => {
        let v = [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Donec eleifend cursus lobortis",
            "THIS IS AN ALL CAPS STRING",
            "this is an all lower string"
        ];

        for (var i in v) {
            var r = randomCase(v[i]);
            expect(r.toLowerCase()).toEqual(v[i].toLowerCase());
            expect(r).not.toEqual(v[i]);
            expect(r).not.toEqual(v[i].toUpperCase());
            expect(r).not.toEqual(v[i].toLowerCase());
        }
    });
});

export function sameCase(a : string, b : string): number {
    console.log( a.charCodeAt(0))
    return   !(a+b).match(/^[a-z]+$/i) ? -1:  (a +b) == (a+b).toUpperCase() ||  (a +b) == (a+b).toLowerCase()? 1: 0
}


function doTest(a : string, b : string, expected : number){
    it(`Testing for "${a}" and "${b}"`, function() {
    expect(sameCase(a,b)).toEqual( expected);
    });
}

describe("Solution", function() {
    doTest('C', 'B', 1);
    doTest('b', 'a', 1);
    doTest('d', 'd', 1);
    doTest('A', 's', 0);
    doTest('c', 'B', 0);
    doTest('b', 'Z', 0);
    doTest('\t', 'Z', -1);
    doTest('H', ':', -1);
    doTest("^","B", -1);
});
/* https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/train/typescript
Check same case
Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1
* */


const Random = (): number =>  {


}; // use your magic here


describe("Sample Tests", function() {
    it("Property lookups should return random numbers", function() {
        assert.isNumber(Random.test);
    });
    it("Calling Random should return a random number", function() {
        assert.isNumber(Random());
    });
    it("Constructing a new instance of Random should return a wrapped random number", function() {
        assert.isNumber(new Random().value);
    });
    it("The prototype of Random should be a wrapped random number", function() {
        assert.isNumber(Object.getPrototypeOf(Random).value);
    });
    it("The property descriptor of Random be a wrapped random number", function() {
        assert.isNumber(Object.getOwnPropertyDescriptor(Random).value);
    });
});
