export function checkConcatenatedSum(x: number, n: number) {
  let cm = x
    .toString()
    .split('')
    .map((e) => {
      return e;
    });
  //let sign = cm[0] === '-' ? '-' : '';
  let total = 0;
  cm.forEach((e) => {
    if (e === '-') return;
    total = total + Number(e.repeat(n));
    return '';
  });

  return Math.abs(x) === total;
}
