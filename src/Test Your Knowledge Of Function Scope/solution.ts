function add(a: number = 0) {
  let currentSum = a;
  function f(b: number) {
    currentSum += b;
    return currentSum;
  }

  return f;
}
export  default  add
