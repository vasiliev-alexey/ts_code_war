// See https://www.chaijs.com for how to use Chai.
import { assert } from "chai";

import { humanYearsCatYearsDogYears } from "./solution";

describe("Example Tests", function() {

  it("one", function() {
    assert.deepEqual(humanYearsCatYearsDogYears(1), [1,15,15]);
  });

  it("two", function() {
    assert.deepEqual(humanYearsCatYearsDogYears(2), [2,24,24]);
  });

  it("ten", function() {
    assert.deepEqual(humanYearsCatYearsDogYears(10), [10,56,64]);
  });

});
