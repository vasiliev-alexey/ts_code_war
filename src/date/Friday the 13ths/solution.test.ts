import { fridayTheThirteenths } from './solution';

describe('Tests', () => {
  it('test', () => {
    expect(fridayTheThirteenths(1999, 2000)).toBe('8/13/1999 10/13/2000');
    expect(fridayTheThirteenths(2000)).toBe('10/13/2000');
  });
});
