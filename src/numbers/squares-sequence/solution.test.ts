import { squares } from './solution';
describe('Basic Tests', function () {
  it('It should works for basic tests', function () {
    expect(squares(2, 5)).toEqual([2, 4, 16, 256, 65536]);
    expect(squares(3, 3)).toEqual([3, 9, 81]);
    expect(squares(5, 3)).toEqual([5, 25, 625]);
    expect(squares(10, 4)).toEqual([10, 100, 10000, 100000000]);
  });
});

describe('Should return an empty array if n<=0', function () {
  expect(squares(2, 0)).toEqual([]);
  expect(squares(2, -5)).toEqual([]);
});
