function formatWords(words: string[]): string{

    if (!words || words.filter(w => w.length > 0).length == 0) {
        return ""
    }
    if(words.filter(w => w.length > 0).length ==1) {
        return  words.filter(w => w.length > 0)[0];
    }
    let res =   words.filter(w => w.length > 0).join(", ");
    const lastIndex = res.lastIndexOf(',');

    return res.slice(0, lastIndex) +
    " and" +    res.slice(lastIndex +1);
//return  words.filter(w => w.length > 0).join(", ").replace(words[words.length-2]+", "+words[words.length-1] , words[words.length-2]+' and '+words[words.length-1])
}


const chai = require("chai");
const assert = chai.assert;


describe("Format words into a sentence", () => {
    it("Fixed tests", () => {
        assert.strictEqual(formatWords(['one', 'two', 'three', 'four']), 'one, two, three and four', "formatWords(['one', 'two', 'three', 'four'] should return 'one, two, three and four'")
        assert.strictEqual(formatWords(['one']), 'one', "formatWords(['one']) should return 'one'")
        assert.strictEqual(formatWords(['one', '', 'three']), 'one and three', "formatWords(['one', '', 'three']) should return 'one and three'")
        assert.strictEqual(formatWords(['', '', 'three']), 'three', "formatWords(['', '', 'three']) should return 'three'")
        assert.strictEqual(formatWords(['one', 'two', '']), 'one and two', "formatWords(['one', 'two', '']) should return 'one and two'")
        assert.strictEqual(formatWords([]),'', 'formatWords([]) should return ""')
        assert.strictEqual(formatWords(null), '', 'formatWords(null) should return ""')
        assert.strictEqual(formatWords(['']), '', 'formatWords([""]) should return ""')
        assert.strictEqual(formatWords( ["wyrpfatp","hknme","ffehu","nnfdpmcoj","iolhmazvhw","","tqubn","b","dda",""]), 'wyrpfatp, hknme, ffehu, nnfdpmcoj, iolhmazvhw, tqubn, b and dda', 'formatWords([""]) should return ""')
    });
})
