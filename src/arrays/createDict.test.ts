function createDict(keys, values) {

    let rez = {};
    for (let i = 0; i < keys.length; i++) {
        rez[keys[i]] = values[i] ?? null;
    }
    return rez


}


describe("Tests", () => {
    it("test", () => {
        expect(createDict(['a', 'b', 'c'], [1, 2, 3])).toEqual({'a': 1, 'b': 2, 'c': 3})
        expect(createDict(['a', 'b', 'c'], [1, 2, 3, 4])).toEqual({'a': 1, 'b': 2, 'c': 3})
        expect(createDict(['a', 'b', 'c', 'd'], [1, 2, 3])).toEqual({'a': 1, 'b': 2, 'c': 3, 'd': null})

    });
});

function nthChar(words) {
    let res = [];
    for (let i = 0; i < words.length; i++) {
        res.push(words[i][i])
    }
    return res.join("")
}

const {assert} = require("chai")

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(nthChar([]), '');
        assert.strictEqual(nthChar(['yoda', 'best', 'has']), 'yes');
    })
})


function hasUniqueChars(str: string) {
    return str.split("").map((v, i, a) => a.indexOf(v) == a.lastIndexOf(v))
        .filter(v => !v).length == 0

}


describe("Tests", () => {
    it("test", () => {
        expect(hasUniqueChars("  nAa")).toEqual(false) // because there are two spaces ' '
        expect(hasUniqueChars("abcdef")).toEqual(true)
        expect(hasUniqueChars("aA")).toEqual(true) // case - sensitivity
        expect(hasUniqueChars("++-")).toEqual(false) // because there are two '+'

    });
});


function solution(...rest) {
   return  rest.map((v, i, a) => a.indexOf(v) == a.lastIndexOf(v))
        .filter(v => !v).length != 0

}

describe("Tests", () => {
    it("test", () => {
        expect(solution(1, 2, 3)).toEqual( false);
        expect(solution(1, 2, 3, 6, 5, 6)).toEqual( true);
        expect(solution('a', 'b', 'c', 'a')).toEqual( true);
        expect(solution(1, 2, 3, 'a', 'b')).toEqual( false);
    });
});
