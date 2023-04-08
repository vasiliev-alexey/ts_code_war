function wordToBin(str: string){
    //code away!!!
    return str.split("").map( c => "0" + c.charCodeAt(0).toString(2))
}



describe("Tests", () => {
    it("test", () => {
        expect(wordToBin('man')).toEqual( [ '01101101', '01100001', '01101110' ]);
        expect(wordToBin('AB')).toEqual( ['01000001', '01000010']);
        expect(wordToBin('wecking')).toEqual([ '01110111', '01100101', '01100011', '01101011', '01101001', '01101110', '01100111' ]);
        expect(wordToBin('Ruby')).toEqual([ '01010010', '01110101', '01100010', '01111001' ]);
        expect(wordToBin('Yosemite')).toEqual([ '01011001', '01101111', '01110011', '01100101', '01101101', '01101001', '01110100', '01100101' ]);
    });
});

function orderWord(s : string){
     return  !s   ? "Invalid String!" :  s.split("").sort( (a , b) => a.charCodeAt(0) - b.charCodeAt(0)).join("")
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests",() =>{
    it("Tests", () => {
        assert.strictEqual(orderWord("Hello, World!"), " !,HWdellloor");
        assert.strictEqual(orderWord("bobby"), "bbboy");
        assert.strictEqual(orderWord("b"), "b");
        assert.strictEqual(orderWord(""), "Invalid String!");
        assert.strictEqual(orderWord("completesolution"), "ceeillmnooopsttu");
        assert.strictEqual(orderWord("\"][@!$*(^&%"), "!\"$%&(*@[]^");
        assert.strictEqual(orderWord("i\"d][@z!$r(^a&world%"),"!\"$%&(@[]^addilorrwz");
        assert.strictEqual(orderWord(null),"Invalid String!");
        assert.strictEqual(orderWord("cba"),"abc");
        assert.strictEqual(orderWord("abc"),"abc");
    })
})


const comfortableWord = word => {
    return word.split("").every(c => ['q', 'w', 'e', 'r', 't', 'a', 's', 'd', 'f', 'g', 'z', 'x', 'c', 'v', 'b', 'y', 'u', 'i', 'o', 'p', 'h', 'j', 'k', 'l', 'n', 'm'].includes(c))
};



describe('Tests', () => {
    it('should return true for comfortable words', () => {
        let word = 'yams';
        expect(comfortableWord(word)).toEqual( true  ) ;
    });

    it('should return false for uncomfortable words', () => {
        let word = 'test';
        expect(comfortableWord(word)).toEqual( false );
    });
});
