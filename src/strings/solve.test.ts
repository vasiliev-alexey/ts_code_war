export function solve(s: string) {
    // your code here
   return +s.match(/\d*/ig)!.filter( e => e.length > 0).map(e => +e).reduce( (a, e)=>    e > a  ? e : a, -1);

}


describe("Fixed tests", () => {
    it("Testing for gh12cdy695m1", () => expect(solve('gh12cdy695m1')).toEqual(695));
    it("Testing for 2ti9iei7qhr5", () => expect(solve('2ti9iei7qhr5')).toEqual(9));
    it("Testing for vih61w8oohj5", () => expect(solve('vih61w8oohj5')).toEqual(61));
    it("Testing for f7g42g16hcu5", () => expect(solve('f7g42g16hcu5')).toEqual(42));
    it("Testing for lu1j8qbbb85", () => expect(solve('lu1j8qbbb85')).toEqual(85));
});


/* Numbers in strings
https://www.codewars.com/kata/59dd2c38f703c4ae5e000014/train/typescript
In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.
For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.
Good luck!
*/
