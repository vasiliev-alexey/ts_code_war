export function largest(n, array) {

    return array.sort( (a , b) =>  b - a).slice(0, n).reverse()
}

export function descendingOrder(n) {
    // your code here
    console.log(n.toString() , n.toString().split('').sort().reverse().join(''));
    return +n.toString().split('').sort().reverse().join('')
}

