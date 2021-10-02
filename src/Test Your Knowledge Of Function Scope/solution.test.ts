import { assert } from "chai";

import  add  from "./solution";

describe("Basic tests", function() {
  it("Testing : ", function() {
    assert.strictEqual(add(2)(5), 7, 'Should return the addition of these invocations!');
    assert.strictEqual(add(14)(25), 39, 'Should return the addition of these invocations!');
    assert.strictEqual(add(10)(10), 20, 'Should return the addition of these invocations!');
    assert.strictEqual(add(0)(0), 0, 'Should return the addition of these invocations!');
  });
});
