import { FilterString } from './solution';
describe('Fixed Tests', () => {
  test.each([
    ['123', 123],
    ['a1b2c3', 123],
    ['aa1bb2cc3dd', 123],
  ])('.FilterString(%s) return %i', (a, expected) => {
    expect(FilterString(a)).toBe(expected);
  });
});
