import {assert} from 'chai';
import {findUniq} from './kata';

describe('findUniq', () => {
  it('should handle sample cases', () => {
    assert.strictEqual(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
    assert.strictEqual(findUniq([ 0, 0, 0.55, 0, 0 ]), 0.55);
  });
});
