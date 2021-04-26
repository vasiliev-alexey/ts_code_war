import { findOutlier } from './solution';

describe('divCon test', function () {
  it('It should works for basic tests', function () {
    expect(
      findOutlier([
        171229192,
        -59500772,
        167328764,
        31292180,
        179169902,
        144771838,
        -8738436,
        71157602,
        106060728,
        -96087725,
        51588934,
        188909086,
        124576074,
        -194582216,
        -40887938,
        79943666,
        100734696,
        55081106,
      ])
    ).toEqual(-96087725);
    expect(findOutlier([0, 1, 2])).toEqual(1);
    expect(findOutlier([1, 2, 3])).toEqual(2);
    expect(findOutlier([2, 6, 8, 10, 3])).toEqual(3);
    expect(findOutlier([0, 0, 3, 0, 0])).toEqual(3);
    expect(findOutlier([1, 1, 0, 1, 1])).toEqual(0);
  });
});
