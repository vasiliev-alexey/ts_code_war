function Dictionary(words ) {
    this.words = words;
}

Dictionary.prototype.getMatchingWords = function(pattern ) {
     let ptrn = pattern.replace(/\?/gm, ".")
    console.log("ptrn|", ptrn , "|");
    return  this.words.filter(w =>  w.length == pattern.length   &&  w.match(ptrn));
}




function doTest(dict, pattern, expected){
    expect(dict.getMatchingWords(pattern).sort()).toEqual( expected.sort());
}

describe("Tests", () => {
    it("test", () => {
        const fruits = new Dictionary(['banana', 'apple', 'papaya', 'cherry']);
        doTest(fruits, 'lemon', []);
        doTest(fruits, 'cherr??', []);
        doTest(fruits, '?a?a?a', ['banana', 'papaya']);
        doTest(fruits, '??????', ['banana', 'papaya', 'cherry']);
        doTest(fruits, '?????', ['apple']);
    });
});
