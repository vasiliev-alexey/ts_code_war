export function inter(A: Set<number>, B: Set<number>): Set<number> {
  const rez = new Set<number>();
  for (let value of A.values()) {
    if (B.has(value)) {
      rez.add(value);
    }
  }

  for (let value of B.values()) {
    if (A.has(value)) {
      rez.add(value);
    }
  }

  return rez;
}
