function getDivisorsCnt(n){
    let limit = n;
    let numberOfDivisors = 0;

    if (n == 1) return 1;

    for (let i = 1; i < limit; ++i) {
        if (n % i == 0) {
            limit = n / i;
            if (limit != i) {
                numberOfDivisors++;
            }
            numberOfDivisors++;
        }
    }
    return numberOfDivisors;
}


describe("Tests", () => {
    it("test", () => {
        expect(getDivisorsCnt(1)).toEqual(  1);
        expect(getDivisorsCnt(10)).toEqual( 4);
        expect(getDivisorsCnt(11)).toEqual( 2);
        expect(getDivisorsCnt(12)).toEqual( 6);
        expect(getDivisorsCnt(54)).toEqual( 8);
    });
});

/* Count the divisors of a number
Count the number of divisors of a positive integer n.
https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript
Random tests go up to n = 500000.
Examples (input --> output)

4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

*/
