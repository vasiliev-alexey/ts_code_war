// See https://www.chaijs.com for how to use Chai.
import { assert } from "chai";

import { flyBy } from "./kata";

describe("Example Tests", function() {
  it("Basic Tests", function() {
    assert.strictEqual(flyBy('xxxxxx', '====T'), 'ooooox');
    assert.strictEqual(flyBy('xxxxxxxxx', '==T'), 'oooxxxxxx');
    assert.strictEqual(flyBy('xxxxxxxxxxxxxxx', '=========T'), 'ooooooooooxxxxx');
//    assert.strictEqual(flyBy('xxxxxxxxxxxxxxxxxxxxx', '121212121212121212121212'), 'oooooooooooooooooooooooo');
  });
});

