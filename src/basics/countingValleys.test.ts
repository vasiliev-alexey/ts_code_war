function countingValleys(s: string) {
    let level = 0;
    let res = 0;
    for (let x of s.split("")) {


        switch (x) {
            case 'U': {
                level += 1;
                if (level == 0) {
                    res += 1;
                }
                break
            }
            case   'D' : {
                level -= 1
                break
            }
            default : {
                level += 0
            }

        }
    }
    return res
}

const chai = require("chai");
const assert = chai.assert;
it("should test", function () {
    let str = 'UFFDDFDUDFUFU'
    let got = countingValleys(str)
    assert.strictEqual(got, 1);
});
