export function isIsogram(str: string) {
  return (
    str
      .split('')
      .map((item) => item.toLowerCase())
      .filter((value, index, self) => self.indexOf(value) === index).length ===
    str.length
  );
}
