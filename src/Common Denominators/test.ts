import { convertFrac } from './solution';
import { assert } from 'chai';

describe('Fixed Tests', function () {
  it('Basic tests convertFrac', function () {
    assert.strictEqual(
      convertFrac([
        [1, 2],
        [1, 3],
        [1, 4],
      ]),
      '(6,12)(4,12)(3,12)'
    );
    assert.strictEqual(
      convertFrac([
        [69, 130],
        [87, 1310],
        [3, 4],
      ]),
      '(18078,34060)(2262,34060)(25545,34060)'
    );
    assert.strictEqual(
      convertFrac([
        [1, 2],
        [4, 5],
        [3, 4],
        [6, 9],
        [7, 10],
      ]),
      '(30,60)(48,60)(45,60)(40,60)(42,60)'
    );
    assert.strictEqual(
      convertFrac([
        [6, 13],
        [187, 1310],
        [31, 41],
      ]),
      '(322260,698230)(99671,698230)(527930,698230)'
    );
  });
});
