export function posAverage(original: string) {
  let compareCount: number = 0;
  let total: number = 0;

  original
    .split(',')
    .map((e) => e.trim())
    .map((string1, ind, substing) => {
      substing.slice(ind + 1).map((string2) => {
        for (let i = 0; i < string1.length; i++) {
          total += 1;
          if (string1.charAt(i) === string2.charAt(i)) {
            compareCount += 1;
          }
        }
      });
    });
  return (compareCount * 100) / total;
}
