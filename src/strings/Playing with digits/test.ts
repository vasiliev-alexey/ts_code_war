import { G964 } from './solution';
import { assert } from 'chai';

function dotest(n: number, p: number, expected: number) {
  assert.equal(G964.digPow(n, p), expected);
}

describe('Fixed Tests', function () {
  it('digPow', function () {
    dotest(89, 1, 1);
    dotest(92, 1, -1);
    dotest(114, 3, 9);
  });
});
