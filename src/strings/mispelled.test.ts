const mispelled = function (word1 :string, word2: string) {
    let count = 0;
    for(let i = 0; i < word1.length; i++){
        if (word1[i] !== word2[i]) count++
    }
    if (Math.abs(word1.length - word2.length) > 1) return false;
    return count === 1 || word1.includes(word2) || word2.includes(word1)

}
//https://www.codewars.com/kata/5892595f190ca40ad0000095/train/javascript

describe("mispelled", () => {
    it("Sample Tests", () => {
        expect(mispelled('versed', 'xersed')).toEqual(true);
        expect(mispelled('versed', 'applb')).toEqual(false);

        expect(mispelled('versed', 'v5rsed')).toEqual(true);
        expect(mispelled('1versed', 'versed')).toEqual(true);
        expect(mispelled('versed', 'versed1')).toEqual(true);

        expect(mispelled('versed', 'aversed')).toEqual(true);
        expect(mispelled('aaversed', 'versed')).toEqual(false);
        expect(mispelled('versed', 'aaversed')).toEqual(false);
    });
});

/*
Create a function mispelled(word1, word2):

mispelled('versed', 'xersed'); // returns true
mispelled('versed', 'applb'); // returns false
mispelled('versed', 'v5rsed'); // returns true
mispelled('1versed', 'versed'); // returns true
mispelled('versed', 'versed'); // returns true

It checks if the word2 differs from word1 by at most one character.

This can include an extra char at the end or the beginning of either of words.

In the tests that expect true, the mispelled word will always differ mostly by one character. If the two words are the same, return True.

* */
