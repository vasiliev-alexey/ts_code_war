export const calc = (str: string): number => {
  let t = str
    .split('')
    .map((c) => {
      return c.charCodeAt(0).toString();
    })
    .reduce((a, c) => a + c, '');
  const rez = t
    .split('')
    .map((c) => Number(c))
    .reduce((a, b) => {
      return a + b;
    });
  const rez2 = t
    .split('')
    .map((c) => Number(c.replace('7', '1')))
    .reduce((a, b) => {
      return a + b;
    });

  return rez - rez2;
};
