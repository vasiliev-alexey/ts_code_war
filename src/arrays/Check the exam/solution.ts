export function checkExam(array1: string[], array2: string[]): number {
  

  return Math.max(array1.reduce( (a : number, answer: string, index : number) => {
    return array2[index] === answer ? a + 4 : (array2[index] === '' ? a: a-1)
  }, 0) ,0);

 }