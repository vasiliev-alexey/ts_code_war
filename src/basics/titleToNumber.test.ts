function titleToNumber(title: string) {

   return title.split("").map(l => l.charCodeAt(0)-64).reduce((a,b) => a * 26 + b)
}

describe('Initial tests', () => {
    it('should ', function () {
        expect(titleToNumber('A')).toEqual(1);
        expect(titleToNumber('Z')).toEqual(26);
       expect(titleToNumber('AA')).toEqual(27);
        expect(titleToNumber('AZ')).toEqual(52);
        expect(titleToNumber('BA')).toEqual(53);
        expect(titleToNumber('CODEWARS')).toEqual(28779382963);
    });

});
