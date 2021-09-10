export function towerBuilder(nFloors: number) {
  const rez = [];

  for (let i = 0, j = nFloors - 1; i < nFloors; i++, j--) {
    console.log('d:', '*'.repeat(i * 2 + 1));
    rez.push(' '.repeat(j) + '*'.repeat(i * 2 + 1) + ' '.repeat(j));
  }

  return rez;
}
