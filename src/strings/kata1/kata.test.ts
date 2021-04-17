import { Kata } from './kata';

describe('test', () => {
  describe('test kata 1', () => {
    test.each([
      ['qwerty', 'qwerty', 1],
      ['qwerty', 'yq', 0],
      ['aaa', 'aaa', 3],
      ['aya', 'aya', 2],
      ['aei', 'aei', 3],
    ])(
      'Kata.getCount for string %s  should return  %d for string',
      (a, b, exp) => {
        expect(Kata.getCount(b)).toEqual(exp);
      }
    );
  });
});
