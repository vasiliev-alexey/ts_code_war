export class Kata {
    static squareDigits(num: number): number {
     return    Number(num.toString().split('').reduce( (a ,c)  => a + Math.pow(Number(c),2).toString() , '' ))
    }
}
