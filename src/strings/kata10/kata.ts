export class Kata {
  static highAndLow(numbers: string) {
    let sorted = numbers
      .split(' ')
      .map((e) => {
        return Number(e);
      })
      .sort((a, b) => {
        return b - a;
      });

    return `${sorted[0]} ${sorted[sorted.length - 1]}`;
  }
}
