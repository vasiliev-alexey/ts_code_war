export const convertFrac = (lst: [number, number][]): string => {
  const lst2 = lst.map((e) => {
    const gcd = GCD(e[0], e[1]);

    if (gcd != 1) {
      return [e[0] / gcd, e[1] / gcd] as [number, number];
    } else {
      return [e[0], e[1]] as [number, number];
    }
  });

  let lcd = findLCD(lst2);

  if (lcd == Number.POSITIVE_INFINITY) {
    lcd = lst.map((e) => e[1]).reduce((p, c) => p * c, 1);
  }

  return lst2.map((e) => `(${(lcd! * e[0]) / e[1]},${lcd})`).join('');
};

function findLCD(fractions: [number, number][]): number | undefined {
  let denominators = fractions.map((i) => i[1]);
  let denominatorProduct = denominators.reduce(
    (tally, value) => tally * value,
    1
  );
  let den = Array<number>();
  for (let k = 2; k < denominatorProduct; k++) {
    if (denominators.every((value) => k % value === 0)) den.push(k);
  }
  return Math.min(...den);
}

function GCD(k: number, n: number): number {
  return k ? GCD(n % k, k) : n;
}



