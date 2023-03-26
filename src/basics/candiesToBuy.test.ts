function candiesToBuy( kids ){
    let lcm = 1;
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    for (let i = 2; i <= kids ; i++) {
        lcm =   lcm *i / gcd(lcm , i)
    }
    return lcm
}

//https://www.codewars.com/kata/56cca888a9d0f25985000036/train/javascript

describe("Tests", () => {
    it("test", () => {
       expect(candiesToBuy(1)).toEqual(1)
       expect(candiesToBuy(2)).toEqual(2)
       expect(candiesToBuy(3)).toEqual(6)
       expect(candiesToBuy(4)).toEqual(12)
       expect(candiesToBuy(5)).toEqual(60)
       expect(candiesToBuy(10)).toEqual(2520)
       expect(candiesToBuy(11)).toEqual(27720)
       expect(candiesToBuy(12)).toEqual(27720)
       expect(candiesToBuy(20)).toEqual(232792560)

    });
});
