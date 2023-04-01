function shiftedDiff(first : string, second : string){
    // ...
    if(first == second) return  0;
    if(first.length != second.length) return  -1;
    let ss = first.repeat(2);
    console.log(ss.indexOf(second), ss)
    let shift= ss.indexOf(second);
    if(shift == -1) {
        return  -1;
    }
    return first.length - shift
}


function doTest(s1, s2, expected) {
    const actual = shiftedDiff(s1, s2);
        expect(actual).toEqual(expected);
}

describe("sample Tests", () => {
    it("sample tests", () => {
        doTest("  "," ", -1);
        doTest("isn't","'tisn", 2);

        doTest("hoop","pooh", -1);
        doTest("eecoff","coffee", 4);
        doTest("Moose","moose", -1);
        doTest("isn't","'tisn", 2);
        doTest("Esham","Esham", 0);
        doTest(" "," ", 0);
        doTest("hoop","pooh", -1);

    });
});
/*
*function shiftedDiff(first, second) {
  if (first.length != second.length) return -1
  return (second + second).indexOf(first)
}

* */
