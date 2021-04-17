import { Kata } from './kata';
import { assert } from 'chai';

describe('highAndLow', function () {
  it('should pass some sample tests', function () {
    assert.strictEqual(
      Kata.highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'),
      '542 -214'
    );
  });
});
