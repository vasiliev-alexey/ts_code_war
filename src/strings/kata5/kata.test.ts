import { removeChar } from './kata';
import { assert } from 'chai';

describe('removeChar', () => {
  it('basic tests', () => {
    assert.equal(removeChar('eloquent'), 'loquen');
    assert.equal(removeChar('country'), 'ountr');
    assert.equal(removeChar('person'), 'erso');
    assert.equal(removeChar('place'), 'lac');
  });
});
