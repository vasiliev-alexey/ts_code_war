import { assert } from "chai";

import { mystery } from "./solution";

describe("example", function() {
  it("test", function() {
    assert.deepEqual(mystery(), { sanity: 'Hello' })
  });
});
