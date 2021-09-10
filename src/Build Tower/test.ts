import { towerBuilder } from './solution';

describe('Tests', () => {
  it('test', () => {
    console.log('towerBuilder(2)', towerBuilder(2));

    expect(towerBuilder(1)).toEqual(['*']);
    expect(towerBuilder(2)).toEqual([' * ', '***']);
    expect(towerBuilder(3)).toEqual(['  *  ', ' *** ', '*****']);
  });
});
