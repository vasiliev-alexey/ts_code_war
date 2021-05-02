export function zipWith(fn, a0, a1) {
  let rexz = [];
  for (let index = 0; index < Math.min(a0.length, a1.length); index++) {
    rexz.push(fn(a0[index], a1[index]));
  }
  return rexz;
}
