import { count } from './solution';

describe('Tests', () => {
  it('test', () => {
    expect(count(['a', 'a', 'b', 'b', 'b'])).toEqual({ a: 2, b: 3 });
  });
});
