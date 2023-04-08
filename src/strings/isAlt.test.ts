function isAlt(word) {
    const wolves = ['a', 'e', 'i', 'o', 'u'];
    if(word.length  < 2) {
      return   true
    }


    let evens = word.split("").filter(((_, i) => i % 2 == 0));
    let odds = word.split("").filter(((_, i) => i % 2 != 0));
    if(wolves.includes(word[0])) {
        return evens.every(c => wolves.includes(c)) && !odds.every(c => wolves.includes(c));
    } else {
        console.log("2 b" , evens , !evens.every(c => wolves.includes(c)) ,  odds)
        return !evens.some(c => wolves.includes(c)) && odds.every(c => wolves.includes(c));
    }


    // console.log(evens.every(c => wolves.includes(c)) , odds.every(c => !wolves.includes(c)))
    // console.log(odds.every(c => wolves.includes(c))  , evens.every(c => !wolves.includes(c)))
    // return (evens.every(c => wolves.includes(c)) && !odds.every(c => wolves.includes(c))) || (!evens.every(c => wolves.includes(c)) && odds.every(c => wolves.includes(c)))
    //

}


describe("Should work for example tests", function () {
    it('should  amazon', function () {
        var res = isAlt("amazon");
        expect(res).toEqual(true);
    });

    it('should  apple', function () {
        var res = isAlt("apple");
        expect(res).toEqual(false);
    });
    it('should  banana', function () {
        var res = isAlt("banana");
        expect(res).toEqual(true);
    });
    it('should  a', function () {
        var res = isAlt("a");
        expect(res).toEqual(true);
    });

    it('should  iafie', function () {
        var res = isAlt("iafie");
        expect(res).toEqual(false);
    });
    it('should  difia', function () {
        var res = isAlt("difia");
        expect(res).toEqual(false);
    });
});
