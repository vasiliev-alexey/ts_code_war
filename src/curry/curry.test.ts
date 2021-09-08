import add from './curry';
import {assert} from "chai";

describe('solution', () => {
  it('should work when called twice', () => {
    //@ts-ignore
    assert(add(1) === 1);
  });
  it('should work when called twice', () => {
    //@ts-ignore
    assert(add(1)(2) == 3);
  });
  it('should work when called 5 times', () => {
    //@ts-ignore
    assert(add(1)(2)(3)(4)(5) == 15);
  });
});

