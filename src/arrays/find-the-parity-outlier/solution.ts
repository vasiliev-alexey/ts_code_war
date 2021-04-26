export function findOutlier(integers: number[]): number {
  const t = new Map();
  const cnt = new Map();
  for (let i = 0; i < integers.length; i += 1) {
    t.set(Math.abs(integers[i] % 2), integers[i]);
    cnt.set(
      Math.abs(integers[i] % 2),
      (!!cnt.get(Math.abs(integers[i] % 2))
        ? cnt.get(Math.abs(integers[i] % 2))
        : 0) + 1
    );
  }

  if (cnt.get(0) === 1) {
    return t.get(0);
  } else {
    return t.get(1);
  }
}
