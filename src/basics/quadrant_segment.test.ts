// https://www.codewars.com/kata/643ea1adef815316e5389d17/train/typescript

class Coord {
    constructor(public x: number, public y: number) {
    }
}


export function quadrant_segment(A: Coord, B: Coord): boolean {
    const findQ = (x, y) => {
        if (x > 0 && y > 0) return 1
        if (x > 0 && y < 0) return 4
        if (x < 0 && y > 0) return 2
        if (x < 0 && y < 0) return 3
    }
    return findQ(A.x, A.y) != findQ(B.x, B.y);
}


import {assert} from "chai";

function test(a: Coord, b: Coord, e: boolean): void {
    assert.strictEqual(quadrant_segment(a, b), e, `Invalid solution for [${a}, ${b}]`);
}

describe("Fixed", (): void => {
    it("Example", (): void => {
        test(new Coord(1, 2), new Coord(3, 4), false);
        test(new Coord(9, 3), new Coord(-1, 6), true);
        test(new Coord(-1, 6), new Coord(-9, 1), false);
    });
});
