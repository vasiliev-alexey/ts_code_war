function boxBlur(image: number[][]) {
    let w = image[0].length;
    let h = image.length;
    let rez = [];
    for (let i = 1; i < h - 1; i++) {
        let row = [];
        for (let j = 1; j < w - 1; j++) {
            let num = Math.floor((image[i - 1][j - 1] + image[i][j - 1] + image[i + 1][j - 1]
                + image[i - 1][j] + image[i][j] + image[i + 1][j]
                + image[i - 1][j + 1] + image[i][j + 1] + image[i + 1][j + 1]
            ) / 9)
            row.push(num)
        }
        rez.push(row);
    }
    return rez;
}


describe("Basic Tests", function () {
    it("It should works for basic tests.", function () {

        let image = [
                [1, 1, 1],
                [1, 7, 1],
                [1, 1, 1]],
            expected = [[1]]
        expect(boxBlur(image)).toEqual(expected)


        image = [
            [0, 18, 9],
            [27, 9, 0],
            [81, 63, 45]]
        expected = [[28]]
        expect(boxBlur(image)).toEqual(expected)

        image = [
            [36, 0, 18, 9],
            [27, 54, 9, 0],
            [81, 63, 72, 45]]
        expected = [[40, 30]]
        expect(boxBlur(image)).toEqual(expected)

        image = [
            [7, 4, 0, 1],
            [5, 6, 2, 2],
            [6, 10, 7, 8],
            [1, 4, 2, 0]]
        expected = [
            [5, 4],
            [4, 4]]
        expect(boxBlur(image)).toEqual(expected)

        image = [
            [36, 0, 18, 9, 9, 45, 27],
            [27, 0, 54, 9, 0, 63, 90],
            [81, 63, 72, 45, 18, 27, 0],
            [0, 0, 9, 81, 27, 18, 45],
            [45, 45, 27, 27, 90, 81, 72],
            [45, 18, 9, 0, 9, 18, 45],
            [27, 81, 36, 63, 63, 72, 81]]
        expected = [
            [39, 30, 26, 25, 31],
            [34, 37, 35, 32, 32],
            [38, 41, 44, 46, 42],
            [22, 24, 31, 39, 45],
            [37, 34, 36, 47, 59]]
        expect(boxBlur(image)).toEqual(expected)

    })
})

// https://www.codewars.com/kata/5895326bcc949f496b00003e/train/javascript
/*
Task
Last night you had to study, but decided to party instead. Now there is a black and white photo of you that is about to go viral. You cannot let this ruin your reputation, so you want to apply box blur algorithm to the photo to hide its content.

The algorithm works as follows: each pixel x in the resulting image has a value equal to the average value of the input image pixels' values from the 3 × 3 square with the center at x. All pixels at the edges are cropped.

As pixel's value is an integer, all fractions should be rounded down.

Example
image = [
  [1, 1, 1],
  [1, 7, 1],
  [1, 1, 1]
]

result = [
  [1]
]
In the given example all boundary pixels were cropped, and the value of the pixel in the middle was obtained as floor((1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) / 9) = floor(15 / 9) = 1.

Input/Output
[input] 2D integer array image

An image is stored as a rectangular matrix of non-negative integers.

Constraints:

3 ≤ image.length ≤ 15,

3 ≤ image[0].length ≤ 15,

0 ≤ image[i][j] ≤ 255.

[output] 2D integer array

A blurred image.
 */


const cut = function (len, num) {
    let rez = [];
    let temp = 0;
    for (let i = 1; i <= num; i++) {
        rez.push(Math.floor(len / num));
        temp += (len / num) % 1;
        if (temp >= 1) {
            temp--;
            rez[i - 1]++;
        }
    }
    if (rez.reduce((a, b) => a + b, 0) !== len) rez[0]++;
    return rez;
}


describe("ExampleTestCases", function () {


    var assert = function (result, expectedLen, expectedNum) {
        let len = result.reduce((a, b) => a + b);
        expect(len).toEqual(expectedLen, "Asserting the sum of the pieces...");

        var num = result.length;
        expect(num).toEqual(expectedNum, "Asserting the number of the pieces...");

        var min = Math.min.apply(Math, result);
        expect(min).toEqual(Math.floor(expectedLen / expectedNum), "Asserting the shortest piece length...");

        var max = Math.max.apply(Math, result);
        expect(max).toEqual(Math.ceil(expectedLen / expectedNum), "Asserting the longest piece length...");

        var diff = max - min;
        expect(diff).toBeLessThanOrEqual(1);

        expect(diff).toBeGreaterThanOrEqual(0);
        ;
    };

    it("len: 100, num: 1", function () {
        assert(cut(100, 1), 100, 1);
    });

    it("len: 100, num: 2", function () {
        assert(cut(100, 2), 100, 2);
    });

    it("len: 100, num: 3", function () {
        assert(cut(100, 3), 100, 3);
    });
});


function findMultiples(integer: number, limit: number): number[] {
    return Array.from(Array(Math.floor(limit / integer)).keys()).map(e => (e + 1) * integer)
}

import {assert} from "chai";


import chai from "chai";

describe("Basic tests", () => {
    it("Should pass basic tests", () => {
        assert.deepEqual(findMultiples(5, 25), [5, 10, 15, 20, 25]);
        assert.deepEqual(findMultiples(1, 2), [1, 2]);
        assert.deepEqual(findMultiples(5, 7), [5]);
        assert.deepEqual(findMultiples(4, 27), [4, 8, 12, 16, 20, 24]);
        assert.deepEqual(findMultiples(11, 54), [11, 22, 33, 44]);
    });
});


export function getAverage(marks: number[]): number {

    return Math.floor(marks.reduce((a, b) => a + b) / marks.length);
}


describe("solution", function () {
    it("Basic Tests", function () {
        assert.equal(getAverage([2, 2, 2, 2]), 2);
        assert.equal(getAverage([1, 2, 3, 4, 5,]), 3);
        assert.equal(getAverage([1, 1, 1, 1, 1, 1, 1, 2]), 1);
    });
});

//  round(pi*h/12 * (d1**2 + d1*d2 + d2**2), 2)
function cupVolume(d1, d2, height) {
    return Math.round(Math.PI * height / 12 * (d1 ** 2 + d1 * d2 + d2 ** 2) * 100) / 100
}

describe("Cup Volume", function () {
    it("Example tests", function () {
        expect(cupVolume(1, 1, 1)).toEqual(0.79);
        expect(cupVolume(10, 8, 10)).toEqual(638.79);
        expect(cupVolume(1000, 1000, 1000)).toEqual(785398163.4);
        expect(cupVolume(13.123, 123.12, 1)).toEqual(4436.57);
        expect(cupVolume(5, 12, 31)).toEqual(1858.51);
    })
})


function stringClean(s) {
    return s.replaceAll(/\d/ig, '')
}


describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        expect(stringClean("")).toEqual("")
        expect(stringClean("! !")).toEqual("! !")
        expect(stringClean("123456789")).toEqual("")
        expect(stringClean("(E3at m2e2!!)")).toEqual("(Eat me!!)")
        expect(stringClean("Dsa32 cdsc34232 csa!!! 1I 4Am cool!")).toEqual("Dsa cdsc csa!!! I Am cool!")
        expect(stringClean("A1 A1! AAA   3J4K5L@!!!")).toEqual("A A! AAA   JKL@!!!")
        expect(stringClean("Adgre2321 A1sad! A2A3A4 fv3fdv3J544K5L@")).toEqual("Adgre Asad! AAA fvfdvJKL@")
        expect(stringClean("Ad2dsad3ds21 A  1$$s122ad! A2A3Ae24 f44K5L@222222 ")).toEqual("Addsadds A  $$sad! AAAe fKL@ ")
        expect(stringClean("33333Ad2dsad3ds21 A3333  1$$s122a!d! A2!A!3Ae$24 f2##222 ")).toEqual("Addsadds A  $$sa!d! A!A!Ae$ f## ")
        expect(stringClean("My \"me3ssy\" d8ata issues2! Will1 th4ey ever, e3ver be3 so0lved?")).toEqual("My \"messy\" data issues! Will they ever, ever be solved?")
        expect(stringClean("Wh7y can't we3 bu1y the goo0d software3? #cheapskates3")).toEqual("Why can't we buy the good software? #cheapskates")
    });
});

function tailSwap(arr) {
    return [arr[0].split(":")[0] + ":" + arr[1].split(":")[1], arr[1].split(":")[0] + ":" + arr[0].split(":")[1]];
}

describe("Testing", function () {
    it('Basic Tests', function () {
        expect(tailSwap(['abc:123', 'cde:456'])).toEqual(['abc:456', 'cde:123']);
        expect(tailSwap(['a:12345', '777:xyz'])).toEqual(['a:xyz', '777:12345']);
    });
});


function getSolution(arr, sum): boolean {

    let res = [],
        i = 0,
        copyArr,
        solution;
    res.push(arr[0]);

    while (i < arr.length) {
        copyArr = [...res];
        res.length = 0;//delete array

        for (let j = 0; j < copyArr.length; j++) {
            res.push(copyArr[j] + arr[i + 1]);
            res.push(copyArr[j] - arr[i + 1]);
        }

        i++;
    }
    copyArr.includes(sum) ? solution = true : solution = false;

    return solution;


}

describe('Basic tests11', function () {
    it('should ', function () {
        expect(getSolution([1, 3, 4, 6, 8], -2)).toEqual(true);
        //   expect(getSolution([15, 2, 3], 10)).toEqual( true);
        expect(getSolution([1, 5, 3, 2, 5], -2)).toEqual(false);
    });

});


function closeCompare(a, b, margin = 0) {
    if (Math.abs(a - b) <= margin) {
        return 0;
    }
    if ((a - b) < margin) {
        return -1;
    }
    return 1
}

describe("Tests", () => {
    it("Sample tests", () => {
        assert.strictEqual(closeCompare(4, 5), -1)
        assert.strictEqual(closeCompare(5, 5), 0)
        assert.strictEqual(closeCompare(6, 5), 1)
        assert.strictEqual(closeCompare(-6, -5), -1)

        assert.strictEqual(closeCompare(2, 5, 3), 0)
        assert.strictEqual(closeCompare(8.1, 5, 3), 1)
        assert.strictEqual(closeCompare(1.99, 5, 3), -1)
    });
});


function matchArrays <T>(v: T[], r:T[]) : number{
   return   v.filter( e => r.includes(e)).length

}

describe("Tests", () => {
    it("test", () => {
        expect(matchArrays(['Perl', 'Closure', 'JavaScript'], ['Go', 'C++', 'Erlang'])).toEqual(0);
        expect(matchArrays(['incapsulation', 'OOP', 'array'], ['time', 'propert', 'paralelism', 'OOP'])).toEqual(1);
        expect(matchArrays([1, 2, 3, 4, 5], [2, 3, 4, 5, 6])).toEqual(4);
    });
});

function isAN(value) {
    return  typeof  value == "number" ;
}
