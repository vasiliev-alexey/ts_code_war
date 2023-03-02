export function abbrevName(name: string): string {
    // code away
    return name.split(" ").map(w => w.toUpperCase().charAt(0)).join(".");
}


import {assert} from "chai";

describe("Sample Test Cases", function () {
    const SamHarris = abbrevName("Sam Harris");
    const PatrickFeenan = abbrevName("Patrick Feenan");
    const RFavuzzi = abbrevName("R Favuzzi");
    it("Should return a proper abbreviate", function () {
        assert.strictEqual(SamHarris, "S.H", "Should return S.H");
        assert.strictEqual(PatrickFeenan, "P.F", "Should return P.F");
        assert.strictEqual(RFavuzzi, "R.F", "Should return R.F");
    });
});

export function stringToArray(s: string): string[] {
    return s.split(" ")
}


describe('stringToArray', () => {
    it('example 1', () => {
        assert.deepEqual(stringToArray("Robin Singh"), ["Robin", "Singh"]);
    });

    it('example 2', () => {
        assert.deepEqual(stringToArray("I love arrays they are my favorite"), ["I", "love", "arrays", "they", "are", "my", "favorite"]);
    });
});


export const high = (str: string): string => {
    let swap = 0;
    let rez = "";
    for (let word of str.split(" ")) {
        let cost = word.split("").reduce((v, _, i) => v + word.charCodeAt(i) - 96, 0);
        if (cost > swap) {
            swap = cost;
            rez = word;
        }
    }

    return rez;
}

const solutions = [
    ['man i need a taxi up to ubud', 'taxi'],
    // ['what time are we climbing up the volcano', 'volcano'],
    // ['take me to semynak', 'semynak'],
    // ['massage yes massage yes massage', 'massage'],
    // ['take two bintang and a dance please', 'bintang'],
    // ['aa b', 'aa'],
    // ['b aa', 'b'],
    // ['bb d', 'bb'],
    // ['d bb', 'd'],
    // ['aaa b', 'aaa'],
]

describe('Sample test', () => {
    it('works with test inputs', () => {
        solutions.forEach(([input, expected]) => {
            assert.strictEqual(high(input), expected)
        })
    })
})


function removeEveryOther<T>(arr : T[]) : T[]{

  return   arr.filter( (v , i) =>   (i+1)%2 !=0)

}

describe("Basic tests",() =>{
    it("Testing for fixed tests", () => {
        assert.deepEqual(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
        assert.deepEqual(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
        assert.deepEqual(removeEveryOther([[1, 2]]), [[1, 2]]);
        assert.deepEqual(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);
    })
});
