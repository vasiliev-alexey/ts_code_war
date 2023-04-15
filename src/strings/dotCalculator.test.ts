function dotCalculator (equation :string) {
    let params = equation.split(" ");
    let rez = eval(`${params[0].length}  ${params[1].replace("//", "/")}  ${params[2].length}`);
    return ".".repeat(rez) ;
}


const strictEqual = require("chai").assert.strictEqual;

function doTest (string, expected) {
    const actual = dotCalculator(string);
    strictEqual(actual, expected, `for string:\n"${string}"\n`);
}

describe("Tests suite", function () {
    it("sample tests", function () {
        doTest("..... + ...............", "....................");
        doTest("..... - ...", "..");
        doTest("..... - .", "....");
        doTest("..... * ...", "...............");
        doTest("..... * ..", "..........");
        doTest("..... // ..", "..");
        doTest("..... // .", ".....");
        doTest(". // ..", "");
        doTest(". - .", "");
    });
});
