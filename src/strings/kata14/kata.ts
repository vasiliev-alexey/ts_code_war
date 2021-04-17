export function duplicateEncode(word: string) {
  return word
    .split('')
    .map((item) => item.toLowerCase())
    .reduce((a, value, index, self) => {
      if (self.indexOf(value) === index && self.lastIndexOf(value) === index) {
        return a + '(';
      } else {
        return a + ')';
      }
    }, '');
  // console.log(ret);
  // return ret;
}
