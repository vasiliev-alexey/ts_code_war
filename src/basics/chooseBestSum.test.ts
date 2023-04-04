function subset(arra: number[], arra_size: number, limit: number) {
    let result_set = [],
        result;

    for (let x = 0; x < Math.pow(2, arra.length); x++) {
        result = [];
        let tmp_bud = 0;
        let i = arra.length - 1;
        do {
            if ((x & (1 << i)) !== 0) {
                result.push(arra[i]);
                tmp_bud += arra[i];
            }
        } while (i--);

        if (result.length == arra_size && tmp_bud <= limit) {
            result_set.push(tmp_bud);
        }
    }
    return result_set;
}


function chooseBestSum(t: number, k: number, ls: number[]): number | null {

    let answers = subset(ls, k, t);
    answers.sort((a, b) => b - a);
    return answers[0] || null

}

// https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa/train/typescript

import {assert} from "chai";

describe("Fixed Tests", function () {
    it("chooseBestSum", function () {
        assert.strictEqual(
            chooseBestSum(163, 3, [50, 55, 56, 57, 58]),
            163
        );

        assert.strictEqual(
            chooseBestSum(163, 3, [50]),
            null
        );

        assert.strictEqual(
            chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87]),
            228
        );
    });
});


export const likes = (a: string[]): string => {
    switch (a.length) {
        case 0:
            return "no one likes this";
        case 1:
            return `${a[0]} likes this`;
        case 2:
            return `${a[0]} and ${a[1]} like this`;
        case 3:
            return `${a[0]}, ${a[1]} and ${a[2]} like this`;
        default :
            return `${a[0]}, ${a[1]} and ${a.length - 2} others like this`;
    }


}


describe('static tests', function () {
    it('should return correct text', function () {
        assert.equal(likes([]), 'no one likes this');
        assert.equal(likes(['Peter']), 'Peter likes this');
        assert.equal(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
        assert.equal(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
        assert.equal(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
    });
});
