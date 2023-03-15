function removeConsecutiveDuplicates(string) {

    return  string.split(" ").filter( (e ,  i , a ) =>  e != a[i-1] ).join(" ");


}


describe(  "test" , () => {
    function doTest(input, expected) {
        const actual = removeConsecutiveDuplicates(input);
        expect(actual).toEqual( expected);
    }




it("Fixed tests", function() {
    doTest("", "");
    doTest("alpha", "alpha");
    doTest("alpha alphaalpha alphaalphaalpha", "alpha alphaalpha alphaalphaalpha");
    doTest(
        "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta",
        "alpha beta gamma delta alpha beta gamma delta"
    );
    doTest("alpha alpha alpha alpha", "alpha");
    doTest("alpha beta alpha", "alpha beta alpha");
    doTest("alpha alphabeta alphagamma", "alpha alphabeta alphagamma");
    doTest("alpha alpha beta alpha alpha", "alpha beta alpha");
    doTest("alpha beta beta", "alpha beta");
});
})
