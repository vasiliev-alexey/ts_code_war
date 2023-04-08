function incrementString (strng : string) {

    let nums =  strng.match(/\d*$/i);

    if(!nums  || nums[0] == "") {
        return strng + "1";
    }
    return  strng.substring(0, nums.index) + (+nums+1).toString().padStart(nums.toString().length, "0")

}

describe("Tests suite", () => {

    const { assert } = require('chai');

    function doTest(input, expected) {
        const actual = incrementString(input);
        assert.strictEqual(actual, expected, `for string: "${input}"\n`);
    }

    it("sample tests", () => {
        doTest("foo", "foo1");
        doTest("fo99obar99", "fo99obar100");
        doTest("foobar000", "foobar001");
        doTest("foobar999", "foobar1000");
        doTest("foobar00999", "foobar01000");
        doTest("foo", "foo1");
        doTest("foobar001", "foobar002");
        doTest("foobar1", "foobar2");
        doTest("1", "2");
        doTest("009", "010");
        doTest("fo99obar99", "fo99obar100");
    });
});
