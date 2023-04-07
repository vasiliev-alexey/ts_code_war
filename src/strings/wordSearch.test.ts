function wordSearch(query : string, seq: string[]){
    let res = seq.filter( w=> w.toUpperCase().indexOf(query.toLocaleUpperCase()) > -1);
    if (res.length == 0 ) {
        res.push("Empty")
    }
   return  res

}


describe("Tests", () => {
    it("test", () => {
        expect(wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"])).toEqual( ["ab", "abc", "zab"])
        expect(wordSearch("aB", ["za", "ab", "abc", "zab", "zbc"])).toEqual( ["ab", "abc", "zab"])
        expect(wordSearch("ab", ["za", "aB", "Abc", "zAB", "zbc"])).toEqual( ["aB", "Abc", "zAB"])
        expect(wordSearch("abcd", ["za", "aB", "Abc", "zAB", "zbc"])).toEqual( ["Empty"])
    });
});
//https://www.codewars.com/kata/54b81566cd7f51408300022d/train/javascript
