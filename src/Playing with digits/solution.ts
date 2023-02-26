export class G964 {
  public static digPow = (n: number, p: number): number => {
    const rez = n
      .toString()
      .split('')
      .map((s) => Number(s))
      .reduce((prev, c, i) => prev + Math.pow(c, i + p), 0);
    return rez % n ? -1 : rez / n;
  };
}
