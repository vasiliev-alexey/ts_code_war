export function FilterString(data: string) {
  return Number(
    data
      .split('')
      .filter((c) => {
        return !isNaN(+c - parseFloat(c));
      })
      .join('')
  );

  //console.log(t);
}
