export function trim(str : string, size : number)   : string{
    return str.length <= size ? str : size <= 3 ? str.slice(0, size) + '...' : str.slice(0, size - 3) + '...';
}

