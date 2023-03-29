export function squareOrSquareRoot(array: number[]): number[] {
    return array.map(e => Math.pow(Math.ceil(Math.sqrt(e)), 2) == e ? Math.sqrt(e) : Math.pow(e, 2));
}


import {assert} from "chai";

describe("Solution", function () {
    it("basic tests 1", function () {
        let input: number[] = [4, 3, 9, 7, 2, 1];
        let expected: number[] = [2, 9, 3, 49, 4, 1];
        assert.deepEqual(squareOrSquareRoot(input.slice()), expected);
    });
    it("basic test 2", function () {
        let input: number[] = [100, 101, 5, 5, 1, 1];
        let expected: number[] = [10, 10201, 25, 25, 1, 1];
        assert.deepEqual(squareOrSquareRoot(input.slice()), expected);
    });

    it("basic test 3", function () {
        let input: number[] = [1, 2, 3, 4, 5, 6];
        let expected: number[] = [1, 4, 9, 2, 25, 36];
        assert.deepEqual(squareOrSquareRoot(input.slice()), expected);
    });
});


export function getGrade(a: number, b: number, c: number): string {

    const avg = (a + b + c) / 3;

    switch (true) {
        case         avg < 60  :            return "F";
        case         avg < 70  :            return "D";
        case         avg < 80  :            return "C";
        case         avg < 90  :            return "B";
        default :
            return "A"
    }

}


describe('should return an A', function () {
    it("getGrade(95, 90, 93)", () => assert.strictEqual(getGrade(95, 90, 93), 'A'));
    it("getGrade(100, 85, 96)", () => assert.strictEqual(getGrade(100, 85, 96), 'A'));
    it("getGrade(92, 93, 94)", () => assert.strictEqual(getGrade(92, 93, 94), 'A'));
    it("getGrade(100, 100, 100)", () => assert.strictEqual(getGrade(100, 100, 100), 'A'));
});
describe('should return a B', function () {
    it("getGrade(70, 70, 100)", () => assert.strictEqual(getGrade(70, 70, 100), 'B'));
    it("getGrade(82, 85, 87)", () => assert.strictEqual(getGrade(82, 85, 87), 'B'));
    it("getGrade(84, 79, 85)", () => assert.strictEqual(getGrade(84, 79, 85), 'B'));
});
describe('should return a C', function () {
    it("getGrade(70, 70, 70)", () => assert.strictEqual(getGrade(70, 70, 70), 'C'));
    it("getGrade(75, 70, 79)", () => assert.strictEqual(getGrade(75, 70, 79), 'C'));
    it("getGrade(60, 82, 76)", () => assert.strictEqual(getGrade(60, 82, 76), 'C'));
});
describe('should return a D', function () {
    it("getGrade(65, 70, 59)", () => assert.strictEqual(getGrade(65, 70, 59), 'D'));
    it("getGrade(66, 62, 68)", () => assert.strictEqual(getGrade(66, 62, 68), 'D'));
    it("getGrade(58, 62, 70)", () => assert.strictEqual(getGrade(58, 62, 70), 'D'));
});
describe('should return an F', function () {
    it("getGrade(44, 55, 52)", () => assert.strictEqual(getGrade(44, 55, 52), 'F'));
    it("getGrade(48, 55, 52)", () => assert.strictEqual(getGrade(48, 55, 52), 'F'));
    it("getGrade(58, 59, 60)", () => assert.strictEqual(getGrade(58, 59, 60), 'F'));
    it("getGrade(0, 0, 0)", () => assert.strictEqual(getGrade(0, 0, 0), 'F'));
});
