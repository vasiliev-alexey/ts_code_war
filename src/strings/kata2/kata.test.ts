import {bouncingBall} from './kata';

describe('test', () => {
    describe('test kata 1', () => {
        test.each([
            [3.0, 0.66, 1.5, 3],
            [3.0, 1, 1.5, -1],
            [30.0, 0.66, 1.5, 15],
            [30, 0.75, 1.5, 21],
            [30, 0.4, 10, 3],
        ])(
            'Kata.getCount for  [%d , %d , %d ]   should return  %d',
            (a, b, c, exp) => {
                expect(bouncingBall(a, b, c)).toEqual(exp);
            }
        );
    });
});

