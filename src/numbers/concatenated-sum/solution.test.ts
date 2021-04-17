import { checkConcatenatedSum } from './solution';

describe('Should return an empty array if n<=0', function () {
  it('It should works for basic tests', function () {
    expect(checkConcatenatedSum(2997, 3)).toEqual(true);
    expect(checkConcatenatedSum(-2997, 3)).toEqual(true);
    expect(checkConcatenatedSum(-777, 3)).toEqual(false);
    expect(checkConcatenatedSum(777, 3)).toEqual(false);
  });
});
