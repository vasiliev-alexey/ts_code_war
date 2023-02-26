export function solve(s: string) {

    return s.split('').filter( c => c === c.toLowerCase()).length >= s.length/2 ? s.toLowerCase() : s.toUpperCase()


}
