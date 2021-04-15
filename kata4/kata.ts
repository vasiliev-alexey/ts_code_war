export function rowSumOddNumbers(n: number): number {
  const c = n - 1;
  let b = ((1 + 1 + 2 * c) / 2) * c + 1;
  let rez = b;
  for (let index = 1; index <= c; index++) {
    rez = rez + b + 2 * index;
  }
  return rez;
}
