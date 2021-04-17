export class Kata {
  static disemvowel(str: string) {
    //  const vowel  = ['a', 'e', 'i', 'o', 'u'];
    return str
      .split('')
      .map((c) => {
        return ['a', 'e', 'i', 'o', 'u'].some((v) => v === c.toLowerCase())
          ? ''
          : c;
      })
      .join('');
  }
}
