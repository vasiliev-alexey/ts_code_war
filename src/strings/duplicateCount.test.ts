export function duplicateCount(text: string): number{

    let  res   = new Map();
    let retVal = 0;
    text.toLowerCase().split("").map( c => res.set( c , (res.get(c) ??0)+1 ))
    console.log(res)
    for (let re of res) {
        if(re[1] > 1)  retVal++;
        }

    return retVal;
}
// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/typescript

// See https://www.chaijs.com for how to use Chai.
import { assert } from "chai";



describe("example", function() {
    it("test", function() {
        assert.equal(duplicateCount(""), 0);
        assert.equal(duplicateCount("abcde"), 0);
        assert.equal(duplicateCount("aabbcde"), 2);
        assert.equal(duplicateCount("aabBcde"), 2,"should ignore case");
        assert.equal(duplicateCount("Indivisibility"), 1)
        assert.equal(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")
    });
});


function onlyDuplicates(str : string) {
    // your code here
    return str.split("").filter( (v , i, ar) => (ar.indexOf(v) != ar.lastIndexOf(v)) ).join("")
}
describe("Basic tests",function() {
    it("Small numbers",function() {
        expect(onlyDuplicates('abccdefee')).toEqual( 'cceee')
        expect(onlyDuplicates('hello')).toEqual( 'll')
        expect(onlyDuplicates('colloquial')).toEqual( 'ollol')
        expect(onlyDuplicates('foundersandcoders')).toEqual( 'ondersndoders')
    })})
