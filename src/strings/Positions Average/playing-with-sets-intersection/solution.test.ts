import { assert } from 'chai';
import { posAverage } from './solution';

describe('posAverage', function () {
  function assertFuzzy(s: string, expected: number, msg = '') {
    // max error
    let merr = 1e-9;
    console.log('Testing ', s);
    let actual = posAverage(s);
    console.log('Actual ' + actual.toExponential(10));
    console.log('Expect ' + expected.toExponential(10));
    let inrange: boolean = Math.abs(actual - expected) <= merr;
    if (inrange === false) {
      msg =
        'Expected value near: ' +
        expected.toExponential(10) +
        ', got: ' +
        actual.toExponential(10);
      console.log(msg);
    }
    console.log('#');
    assert.equal(inrange, true);
  }

  it('Basic tests', function () {
    assertFuzzy(
      '466960, 069060, 494940, 060069, 060090, 640009, 496464, 606900, 004000, 944096',
      26.6666666667
    );
    assertFuzzy(
      '444996, 699990, 666690, 096904, 600644, 640646, 606469, 409694, 666094, 606490',
      29.2592592593
    );
    assertFuzzy(
      '449404, 099090, 600999, 694460, 996066, 906406, 644994, 699094, 064990, 696046',
      24.4444444444
    );
    assertFuzzy('0, 0, 1', 33.3333333333);
  });
});
