function solution(number: number): string {

    const conv: [number, string][] =
        [[1000, 'M'],
            [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'],
            [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'],
            [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];

    let res = '';

    while (number > 0) {
        for (let i = 0; i < conv.length; i++) {
            if (number >= conv[i][0]) {
                number -= conv[i][0];
                res += conv[i][1];
                break;
            }
        }
    }
    return res;
}

//https://www.codewars.com/kata/51b62bf6a9c58071c600001b/train/typescript

import {assert} from 'chai';

describe('solution', function () {
    it('basic', function () {
        assert.strictEqual(solution(1000), 'M')
        assert.strictEqual(solution(4), 'IV')
        assert.strictEqual(solution(1), 'I')
        assert.strictEqual(solution(1990), 'MCMXC')
        assert.strictEqual(solution(2008), 'MMVIII')
        // assert.strictEqual(solution(1444), 'MCDXLIV')
    });
});


export class Kata {
    static dnaStrand(dna: string) {

        return dna.split("").map(c => {
            switch (c) {
                case   'A' :
                    return 'T';
                case      'T'
                :
                    return 'A';
                case     'G'
                :
                    return 'C';
                case         'C'
                :
                    return 'G';
                default :
                    return c;
            }
        }).join("")


    }
}


describe("dnaStrand", function () {
    it("Sample tests", function () {
        assert.strictEqual(Kata.dnaStrand("AAAA"), "TTTT", "String AAAA is");
        assert.strictEqual(Kata.dnaStrand("ATTGC"), "TAACG", "String ATTGC is");
        assert.strictEqual(Kata.dnaStrand("GTAT"), "CATA", "String GTAT is");
    });
});
