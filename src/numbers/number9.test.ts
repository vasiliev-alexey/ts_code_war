function number9(n){
    let  num = 0;
    let l = String(n).length;
    while (l > 0) {
        let  k = 10 ** l;
        let  m = 10 ** (l-1);
        num += Math.floor(n/k) * (l*m);
        n = n % k;
        if (n >= k-m)
            num += n % m + 1;
        l -= 1;
    }
    return Number(num);

}



describe("Tests", () => {
    it("test", () => {
        expect(number9(1)).toEqual( 0, 'Nein!')
        expect(number9(9)).toEqual( 1, 'Nein!')
        expect(number9(100)).toEqual( 20, 'Nein!')
        expect(number9(1000)).toEqual( 300, 'Nein!')
        expect(number9(10000)).toEqual( 4000, 'Nein!')
        expect(number9(100000)).toEqual( 50000, 'Nein!')
        expect(number9(565754)).toEqual(275645, 'Nein!')
      expect(number9(10000000000)).toEqual(10000000000, 'Nein!')
    });
});
/*
https://www.codewars.com/kata/55143152820d22cdf00001bb/train/rust
It's 9 time!

I want to count from 1 to n. How many times will I use a '9'?

9, 19, 91.. will contribute one '9' each, 99, 199, 919.. wil contribute two '9's each...etc

Note: n will always be a positive integer.

Examples (input -> output)
8  -> 0
9  -> 1
10 -> 1
98 -> 18
100 -> 20

*/
