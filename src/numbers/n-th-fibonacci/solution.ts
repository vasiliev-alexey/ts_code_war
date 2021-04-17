export function nthFibo(n: number): number {
  if (n <= 2) {
    return n - 1;
  } else {
    return nthFibo(n - 1) + nthFibo(n - 2);
  }
}
