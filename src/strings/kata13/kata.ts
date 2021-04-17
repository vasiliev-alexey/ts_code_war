export function catMouse(map: string, moves: number): string {
  let rez: string = '';
  const m = map.split('\n');
  let mouse = Array<number>();
  let cat = Array<number>();
  m.forEach((r, i) => {
    let mp = r.split('').indexOf('m');
    let cp = r.split('').indexOf('C');

    if (mp !== -1) {
      mouse[0] = i;
      mouse[1] = mp;
    }

    if (cp !== -1) {
      cat[0] = i;
      cat[1] = cp;
    }
  });

  if (mouse.length === 0 || cat.length === 0) {
    rez = 'boring without two animals';
  } else if (
    Math.abs(cat[0] - mouse[0]) + Math.abs(cat[1] - mouse[1]) <=
    moves
  ) {
    rez = 'Caught!';
  } else {
    rez = 'Escaped!';
  }

  return rez;
}
