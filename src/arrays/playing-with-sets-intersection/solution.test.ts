import { inter } from './solution';

describe('simple test', function () {
  let A = new Set([1, 2]);
  let B = new Set([2, 3]);
  let C = new Set([2]);
  let AB = inter(A, B);

  it('It should works for basic tests', function () {
    expect(inter(A, A)).toEqual(A);
    expect(AB).toEqual(C);
    expect(AB).toEqual(C);
    expect([...AB].sort()).toEqual([...inter(B, A)].sort());
  });
});

// Test.assertSimilar(inter(A, B), A, "A inter A == A");
//
// Test.assertSimilar(AB, C);
// Test.assertSimilar([...AB].sort(), [...inter(A, B)].sort(), "A inter B == B inter A");
//
// Test.assertEquals(AB instanceof Set, true, "A inter B should be a Set too")
