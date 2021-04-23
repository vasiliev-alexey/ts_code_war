type dataType = number | string;

export function divCon(data: dataType[]) {
  return data.reduce((ac: number, el) => {
    return ac + (typeof el !== 'string' ? Number(el) : -1 * Number(el));
  }, 0);
}
