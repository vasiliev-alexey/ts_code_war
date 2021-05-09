// @ts-ignore
export function squares(x, n) {
  let arr = [];
  let prev = x;

  for (let index = 0; index < n; index++) {
    arr.push(prev);
    prev = prev * prev;
  }

  return arr;
}
