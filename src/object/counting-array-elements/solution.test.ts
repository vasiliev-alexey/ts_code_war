import { count } from './solution';
import {assert} from "chai";

describe('Tests', () => {
  it('test', () => {
    expect(count(['a', 'a', 'b', 'b', 'b'])).toEqual({ a: 2, b: 3 });
  });
});


export class G964 {
  public static nbDig(n: number, d: number): number {

  return  [...Array(n+1).keys()].map( v => v *v).map(  s => s.toString().split('')
      .filter( w => w == d.toString()).length).reduce( (a , v)   => a+v , 0);

  }
}


function testing(actual: number, expected: number) {
  assert.equal(actual, expected);
}

describe("Fixed Tests", function() {
  it("Basic tests nbDig", function() {
    testing(G964.nbDig(5750, 0), 4700)
    testing(G964.nbDig(11011, 2), 9481)
    testing(G964.nbDig(12224, 8), 7733)
    testing(G964.nbDig(11549, 1), 11905)
  });
});
