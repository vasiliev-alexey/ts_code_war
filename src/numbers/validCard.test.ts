function validCard(card: string) {

    return card.replace(/\D/g, '').split('').reverse().map(v => +v)
        .reduce((a, n, i) => a + (0 !== (i % 2) && 9 < (n *= 2) ? (n - 9) : n), 0) % 10 == 0


}


describe("Basic tests", () => {
    it('should ', function () {

        expect(validCard("5457 6238 9323 4311")).toEqual(false);
        expect(validCard("5457 6238 9823 4311")).toEqual(true);
        expect(validCard("2222 2222 2222 2224")).toEqual(true);
        expect(validCard("1234 5678 9012 3452")).toEqual(true);
        expect(validCard("9999 9999 9999 9995")).toEqual(true);
        expect(validCard("1252 6238 9323 4311")).toEqual(false);
        expect(validCard("5457 1125 9323 4311")).toEqual(false);
        expect(validCard("6666 6666 6666 6664")).toEqual(true);
        expect(validCard("5457 6238 0254 4311")).toEqual(false);
        expect(validCard("5457 6238 9323 4311")).toEqual(false);
        expect(validCard("5457 6238 1251 4311")).toEqual(false);
        expect(validCard("5457 6238 9323 1252")).toEqual(false);
        expect(validCard("5457 6238 5568 4311")).toEqual(false);
        expect(validCard("8888 8888 8888 8888")).toEqual(true);
        expect(validCard("1145 6238 9323 4311")).toEqual(false);
        expect(validCard("4444 4444 4444 4448")).toEqual(true);
        expect(validCard("5458 4444 9323 4311")).toEqual(false);
        expect(validCard("5457 6238 9823 4311")).toEqual(true);
        expect(validCard("5457 6238 3333 4311")).toEqual(false);
        expect(validCard("5555 5555 5555 5557")).toEqual(true);
        expect(validCard("8895 6238 9323 4311")).toEqual(false);
        expect(validCard("0123 4567 8901 2345")).toEqual(false);
        expect(validCard("0000 0000 0000 0000")).toEqual(true);
        expect(validCard("0025 2521 9323 4311")).toEqual(false);
        expect(validCard("0000 0300 0000 0000")).toEqual(false);
        expect(validCard("1111 1111 1111 1117")).toEqual(true);
    });

});

//https://www.codewars.com/kata/5418a1dd6d8216e18a0012b2/train/javascript
function validate(n) {

    const isLengthEven = `${n}`.length % 2 == 0;
    return [...`${n}`].map((num, i) => {
        if ((i % 2 === 0 && isLengthEven) || (i % 2 === 1 && !isLengthEven)) {
            let temp = +num * 2;
            if (temp > 9) temp -= 9;
            return temp;
        } else return +num;
    }).reduce((acc, curr) => acc + curr, 0) % 10 === 0;

}

describe("Tests", () => {
    it("test", () => {
        expect(validate(123)).toEqual(false);
        expect(validate(1)).toEqual(false);
        expect(validate(2121)).toEqual(true);
        expect(validate(1230)).toEqual(true);
    });
});

