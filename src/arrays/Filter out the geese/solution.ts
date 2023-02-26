export function gooseFilter (birds: string[]): string[] {
    const geese: string[] = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    return  birds.filter( e => geese.find( b => b === e) === undefined)
}
