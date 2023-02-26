
import {assert} from "chai";
import {Kata} from "./solution";

describe("squareDigits", function() {
  it("should pass a sample test", function() {
    assert.strictEqual(Kata.squareDigits(9119), 811181);
    assert.strictEqual(Kata.squareDigits(0), 0);
  });
});



export function findAverage(array: number[]): number {
  // your code here
  return array.length==0 ?  0 : array.reduce( (a  , e) => a+e , 0)/array.length;
}

describe("solution", () => {
  it('should calculate avg of given numbers',() => {
    assert.strictEqual(findAverage([1,1,1]), 1);
  });
});
