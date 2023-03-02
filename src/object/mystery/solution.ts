export function mystery(): object {
  const results =
      {sanity: 'Hello'};
  return   results;
}


export function getSum(a: number, b: number): number {
  // Good luck!

  if  (a == b)     return a;
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  return ((max - min) + 1) * (min + max) / 2;
}
