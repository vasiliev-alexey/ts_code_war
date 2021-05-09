export function sumTriangularNumbers(n: number): number {
  if (n <=0) {
    return 0;
  }

  let next = 0;
  let rez = 0;
  for (let i = 0; i <=  n; i++) {
    next = next  +i;
    rez = rez + next;
  }

  return rez ;
}