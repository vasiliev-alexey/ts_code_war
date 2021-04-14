export class G964 {

    public static longest = (s1: string, s2: string): string => {

        let s = s1.split('');
        s.push(...s2.split(''));
        return  s.filter((str, i) => s.indexOf(str) === i).sort((a, b) => (a < b ? -1 : 1)).join('')

    }
}