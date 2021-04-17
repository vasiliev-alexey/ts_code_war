export function bouncingBall(
  h: number,
  bounce: number,
  window: number
): number {
  // your code

  // Float parameter "h" in meters must be greater than 0
  // Float parameter "bounce" must be greater than 0 and less than 1
  // Float parameter "window" must be less than h.

  if (h < 0 || bounce < 0 || bounce >= 1 || window >= h) {
    return -1;
  }

  let curH: number = h;
  let inc: number = 1;

  while (curH > window) {
    curH = curH * bounce;
    inc = inc + 2;
  }

  return inc - 2;
}
