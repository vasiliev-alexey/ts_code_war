import {sumTriangularNumbers}  from './solution';

import {assert} from "chai";

describe("solution", function(){
  it("BasicTests", function(){
    assert.equal(sumTriangularNumbers(-971), 0);
    assert.equal(sumTriangularNumbers(6), 56);
    assert.equal(sumTriangularNumbers(34), 7140);
    assert.equal(sumTriangularNumbers(-291), 0);
    assert.equal(sumTriangularNumbers(943), 140205240);

  });
});