function solution (roman) {
   let   input = roman;
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


function doTest (romanString, expected) {
    const actual = solution(romanString);
    expect(actual).toEqual( expected);
}

describe("Tests", () => {
    it("sample tests", () => {
        doTest('XXI', 21);
        doTest('I', 1);
        doTest('IV', 4);
        doTest('MMVIII', 2008);
        doTest('MDCLXVI', 1666);
    });
});
