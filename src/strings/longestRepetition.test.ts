export function longestRepetition(text: string): [string, number] {
    let rez = [];
    const last = text.split("").reduce((p, v ) => {
        if (p.substr(-1) == v) {
            return p + v
        } else {

            rez.push(p)
            return v
        }


    }, "")

    rez.push(last)
    if (rez.length == 0) {
        return ['', 0]
    }
    let r = rez.reduce((l, e) => l.length < e.length ? e : l);

    return [r.substr(0, 1), r.length];

}


describe('Example Tests', () => {
    it('should work with example tests', () => {
        expect(longestRepetition('aaaabb')).toEqual(['a', 4])
        expect(longestRepetition('bbbaaabaaaa')).toEqual(['a', 4])
        expect(longestRepetition('cbdeuuu900')).toEqual(['u', 3])
        expect(longestRepetition('abbbbb')).toEqual(['b', 5])
        expect(longestRepetition('aabb')).toEqual(['a', 2])
        expect(longestRepetition('ba')).toEqual(['b', 1])
        expect(longestRepetition('')).toEqual(['', 0])
    })
})
