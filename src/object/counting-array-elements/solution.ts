export function count(array: number[]) {
  let rez: Record<string, number> = {};
  array.map((e: string) =>  {
    return rez[e] = (rez[e] ?? 0) + 1;
  });

  return rez;
}
