import { G964 } from './kata';

describe('test', () => {
  describe('test kata 1', () => {
    it('Basic tests longest', function () {
      expect(G964.longest('aretheyhere', 'yestheyarehere')).toEqual('aehrsty');
      expect(
        G964.longest('loopingisfunbutdangerous', 'lessdangerousthancoding')
      ).toEqual('abcdefghilnoprstu');
      expect(G964.longest('inmanylanguages', 'theresapairoffunctions')).toEqual(
        'acefghilmnoprstuy'
      );
      expect(G964.longest('lordsofthefallen', 'gamekult')).toEqual(
        'adefghklmnorstu'
      );
    });
  });
});
