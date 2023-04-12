function stringExpansion(s: string) {

    let n = 1;
    let res = ""
    let chars = s.split("");
    for (let i = 0; i < chars.length; i++) {
        if (!Object.is(+chars[i], NaN)) {
            n = +chars[i];
            continue;

        }
        res = res + chars[i].repeat(n);
    }
    return res;

}


describe("Sample test cases", function () {
    it('should ', function () {
        expect(stringExpansion('3abc')).toEqual('aaabbbccc');
        expect(stringExpansion('3D2a5d2f')).toEqual('DDDaadddddff');
        expect(stringExpansion('0d0a0v0t0y')).toEqual('');
        expect(stringExpansion('3d332f2a')).toEqual('dddffaa');
        expect(stringExpansion('abcde')).toEqual('abcde');
        expect(stringExpansion('a2bcde')).toEqual('abbccddee');
    });


});
