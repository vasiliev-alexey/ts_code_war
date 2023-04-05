class RomanNumerals {
    static toRoman(num) {
        const conv: [number, string][] =
            [[1000, 'M'],
                [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'],
                [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'],
                [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];

        let res = '';

        while (num > 0) {
            for (let i = 0; i < conv.length; i++) {
                if (num >= conv[i][0]) {
                    num -= conv[i][0];
                    res += conv[i][1];
                    break;
                }
            }
        }
        return res;
    }

    static fromRoman(str) {
        let   input = str;
        const dictionary = {
            'CM': 900,
            'DCCC': 800,
            'DCC': 700,
            'DC': 600,
            'CD': 400,
            'CCC': 300,
            'CC': 200,
            'XC': 90,
            'LXXX': 80,
            'LXX': 70,
            'LX': 60,
            'XL': 40,
            'XXX': 30,
            'XX': 20,
            'IX': 9,
            'VIII': 8,
            'VII': 7,
            'VI': 6,
            'IV': 4,
            'III': 3,
            'II': 2,
            'M': 1000,
            'D': 500,
            'C': 100,
            'L': 50,
            'X': 10,
            'V': 5,
            'I': 1
        }

        Object.entries(dictionary).forEach(([rmStr, decimal]) => {
            input = input.replace(new RegExp(rmStr, 'g'), ` ${decimal} `)
        })
        return input.trim().split(' ').reduce((acc, cur) => acc += Number(cur), 0)
    }
}

const assert = require('chai').assert;

describe("sample tests", () => {
    it("sample tests", () => {
        assert.strictEqual(RomanNumerals.toRoman(1000), 'M');
        assert.strictEqual(RomanNumerals.toRoman(4), 'IV');
        assert.strictEqual(RomanNumerals.toRoman(1), 'I');
        assert.strictEqual(RomanNumerals.toRoman(1990), 'MCMXC');
        assert.strictEqual(RomanNumerals.toRoman(2008), 'MMVIII');

        assert.strictEqual(RomanNumerals.fromRoman('XXI'), 21);
        assert.strictEqual(RomanNumerals.fromRoman('I'), 1);
        assert.strictEqual(RomanNumerals.fromRoman('IV'), 4);
        assert.strictEqual(RomanNumerals.fromRoman('MMVIII'), 2008);
        assert.strictEqual(RomanNumerals.fromRoman('MDCLXVI'), 1666);
    });
});
