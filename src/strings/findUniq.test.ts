export function findUniq(arr: string[]): string {
    let sortedCharWords = arr.map(string => {return string.toLowerCase().split('').sort()})
    let chars = sortedCharWords.map(s => [...new Set(s)].join(''))
     for (let i = 0; i <= chars.length; i++) {
        if (chars.indexOf(chars[i]) === chars.lastIndexOf(chars[i])) return arr[i]
    }

}


import {assert} from "chai";


describe('findUniq', () => {
    it('should handle sample cases', () => {
        assert.strictEqual(findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a']), 'BbBb');
        assert.strictEqual(findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']), 'foo');
        assert.strictEqual(findUniq(['silvia', 'vasili', 'victor']), 'victor');
        assert.strictEqual(findUniq(['Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter']), 'Harry Potter');
        assert.strictEqual(findUniq(['    ', 'a', ' ']), 'a');
    });
});

function solve(a : string,b: string){



let c1 = a.split("").filter( c => !b.includes(c));
let c2 = b.split("").filter(c =>  !a.includes(c));
return c1.join("") + c2.join("");


};

describe("Basic tests", function(){
    it('should ', function () {
        expect(solve("xyab","xzca")).toEqual("ybzc");
        expect(solve("xyabb","xzca")).toEqual("ybbzc");
        expect(solve("abcd","xyz")).toEqual("abcdxyz");
        expect(solve("xxx","xzca")).toEqual("zca");
    });

});
