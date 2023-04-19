/**
 * Returns the number of times the given character appears in the string,
 * or if more than one character is supplied an array of character counts.
 */
String.prototype.characterCount = function (charsToCount) {
    if (!charsToCount) {
        return undefined;
    }

    const charCnt = Array.from(charsToCount).map(c => Array.from(this).filter(liter => liter === c).length);
    return charCnt.length > 1 ? charCnt : charCnt[0];

};

// https://www.codewars.com/kata/56b409febccd5aafbd000021/train/javascript
describe('#characterCount', function () {
    it('should attach the `characterCount` function to strings', function () {
        expect(''.characterCount).toBeInstanceOf(Function);
    });

    // it('should be a function', function () {
    //     const func = typeof ''.characterCount;
    //     Test.assertEquals(func, 'function', '`characterCount` was found on the `String.prototype` object, but is not a function');
    // });

    it('should return `undefined` when no characters are specified to count', function () {

        const res = ''.characterCount();
       expect(res).toBeUndefined(); // undefined, 'Calling `characterCount` with no arguments is undefined');
    });

    it('should return the number of times the given character appears in the string', function () {
        const res = 'lol'.characterCount('l');
        expect(res).toEqual( 2);
    });

    it('should return the number of times each given character appears in the string when more than 1 is provided', function () {
        const res = 'booop-booop-deee-doo-dooop'.characterCount('ado');
        expect(res).toEqual( [0,3,11]);
    });

    it('should return the number of times each given character appears in the string, even when duplicates are provided', function () {
        const res = 'booop-booop-deee-doo-dooop'.characterCount(['a','d','o','o','d','a']);
        expect(res).toEqual( [0,3,11,11,3,0]);
    });
});
