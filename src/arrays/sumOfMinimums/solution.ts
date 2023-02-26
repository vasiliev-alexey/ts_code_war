export function sumOfMinimums(arr : Array<Array<number>>) : number{
    // your code here
    return  arr.map( n =>Math.min(...n)).reduce((sum, current) => sum + current, 0)
}
