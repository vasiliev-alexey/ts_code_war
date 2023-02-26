// See https://www.chaijs.com for how to use Chai.
import { assert } from "chai";

import { nearestSq } from "./solution";

describe("Basic tests",() => {
  it('basic tests', () => {
    assert.equal(nearestSq(1), 1);
    assert.equal(nearestSq(2), 1);
    assert.equal(nearestSq(10), 9);
    assert.equal(nearestSq(111), 121);
    assert.equal(nearestSq(9999), 10000);
  })
});
