

export function lastSurvivor(letters: string, coords: number[]): string {
    return coords.reduce((rez, coord) => rez.slice(0, coord) + rez.slice(coord + 1), letters)
}




