export class Kata {


    static getCount(str: string): number {
        const vowel = ['a', 'e', 'i', 'o', 'u'];
        let num = 0;
        str.split('').forEach(c => {
            if (vowel.some(v => v === c)) {
                ++num;
            }
        })
        return num
    }
}