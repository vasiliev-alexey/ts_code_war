export function findOdd(params: number[]): number {
  let acum = new Map<number, number>(
    params.map((p) => [p, 0] as [number, number])
  );

  params.forEach((el) => {
    acum.set(el, 1 + acum.get(el)!);
    return acum;
  }, {});

  let rez = 0;
  acum.forEach((val, key) => {
    if (val % 2 === 1) {
      rez = key;
    }
  });

  return rez;
}
