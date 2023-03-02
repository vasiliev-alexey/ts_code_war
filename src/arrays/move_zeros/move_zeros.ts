function move_zeros(arrNum: number[], isRight: boolean = true): number[] {

    let filtered = arrNum.filter(v => v != 0);
    let rez = new Array(arrNum.length).fill(0);
    rez.splice(isRight ?? true ? 0 : arrNum.length - filtered.length, filtered.length, ...filtered)
    console.log(rez)
    return rez;

}


describe("Tests", () => {
    it("test", () => {
        expect(move_zeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0], true)).toStrictEqual([12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]);
        expect(move_zeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0], false)).toStrictEqual([0, 0, 0, 0, 12, 10, 8, 12, 7, 6, 4, 10, 12]);
        expect(move_zeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0])).toStrictEqual([12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]);


    });
});
