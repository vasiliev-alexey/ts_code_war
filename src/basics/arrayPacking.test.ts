function arrayPacking(a : number[]) {

     return  parseInt(a.map( v => v.toString(2).padStart(8 , '0')).reverse().join(""), 2)

}




describe("Basic Tests", function(){
    it("It should works for basic tests.", function(){

        expect(arrayPacking([24, 85, 0]) ).toEqual(21784)

        expect(arrayPacking([23, 45, 39])).toEqual( 2567447)

    })})


function keepOrder(ary : number [], val :number) {


    for (let idx in ary) {
        if (ary[idx] >= val) {
        return +idx;

        }
    }

 return     ary.length ;

}



describe("Example tests", function() {
    it("Fixed cases", function() {
        expect(keepOrder([1, 2, 3, 4, 7], 5)).toEqual( 4);
        expect(keepOrder([1, 2, 3, 4, 7], 0)).toEqual( 0);
        expect(keepOrder([1, 1, 2, 2, 2], 2)).toEqual( 2);
        expect(keepOrder([1, 2, 3, 4], 5)).toEqual( 4);
        expect(keepOrder([1, 2, 3, 4], -1)).toEqual( 0);
        expect(keepOrder([1, 2, 3, 4], 2)).toEqual( 1);
        expect(keepOrder([1, 2, 3, 4], 0)).toEqual( 0);
        expect(keepOrder([1, 2, 3, 4], 1)).toEqual( 0);
        expect(keepOrder([1, 2, 3, 4], 2)).toEqual( 1);
        expect(keepOrder([1, 2, 3, 4], 3)).toEqual( 2);
    });
});


function consonantCount(str: string) {

    return str.toLowerCase().split("").filter(c => /^[a-z]+$/.test(c)).filter( c => !['a', 'e', 'i', 'o', 'u'].includes(c) ).length
}


const { assert } = require('chai');

describe("Sample tests", function() {

    function dotest(input, expected) {
        let actual = consonantCount(input);
        assert.strictEqual(actual, expected, `Invalid answer for str='${input}'`);
    }

    it("Empty string", function() {
        dotest('', 0);
    });

    it("Only vowels", function() {
        dotest('aeiouAEIOU', 0);
        dotest('aaa', 0);
    });

    it("Only consonants", function() {
        dotest('bcdfghjklmnpqrstvwxyz', 21);
        dotest('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ', 42);
    });

    it("Test with 'Y'", function() {
        dotest('y', 1);
        dotest('Y', 1);
    });

    it("Regex \\w trap", function() {
        dotest('01234567890_', 0);
    });

    it("Special characters", function() {
        dotest(' ^&$#', 0);
    });

    it("Full  alphabet", function() {
        dotest('aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#', 42);
    });
});
