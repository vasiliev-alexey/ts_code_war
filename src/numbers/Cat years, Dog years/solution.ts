export function humanYearsCatYearsDogYears(humanYears: number): [number, number, number] {
    // Your code here!

    return [humanYears, humanYears < 2 ? 15 : humanYears < 3 ? 24 : (humanYears - 2) * 4 + 24, humanYears < 2 ? 15 : humanYears < 3 ? 24 : (humanYears - 2) * 5 + 24];
}
