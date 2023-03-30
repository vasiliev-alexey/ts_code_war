function nextItem<T>(xs: T[], item: T) : T | undefined {

   // let rez = undefined;

    // for (let i = 0; i <  xs.length; i++) {
    //     if (xs[i] == item) {
    //         return  xs[i+1];
    //     }
    // }

    let flag = false;

    for (const e of xs) {
        if (flag) {
            return e;
        }
        if (e === item) {
            flag = true;
        }
    }


}


describe("Tests", () => {
    it("test", () => {
        expect(nextItem("testing", "t")).toEqual( "e");
        expect(nextItem([1, 2, 3, 4, 5, 6, 7, 8], 5)).toEqual( 6);
        expect(nextItem(['a', 'b', 'c'], 'd')).toEqual( undefined);
        expect(nextItem(['a', 'b', 'c'], 'c')).toEqual( undefined);

        // function* countFrom(n) { for (let i = n; ; ++i) yield i; }
        // expect(nextItem(countFrom(1), 12)).toEqual( 13);

    });
});
