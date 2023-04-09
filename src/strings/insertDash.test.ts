function insertDash(num) {

    let res = [];
    let nums = num.toString().split("").map(e => +e);
    for (let i = 0; i < nums.length; i++) {
        res.push(nums[i])
        if ((nums[i] % 2 != 0) && (nums[i + 1] % 2 != 0 && !!nums[i + 1])) {
            res.push("-")
        }
    }
    return res.join("")
}


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
    it("Fixed tests", () => {
        assert.strictEqual(insertDash(454793), '4547-9-3');
        assert.strictEqual(insertDash(123456), '123456');
        assert.strictEqual(insertDash(1003567), '1003-567');
    })
});


function insertDashII(num) {
    let nums=num.toString().split('')
    const res=[];
    for (let i=0;i<nums.length;i++) {
    res.push(nums[i])
        if (nums[i]%2===0&&nums[i+1]%2===0&&nums[i]!=='0'&&nums[i+1]!=='0'){res.push('*')}
        if (nums[i]%2!==0&&nums[i+1]%2!==0&&nums[i+1]!==undefined){res.push('-')}
    }
    return res.join('')
}

describe('Initial tests', function () {
    it("Fixed tests", () => {
    assert.strictEqual(insertDashII(454793), '4547-9-3');
    assert.strictEqual(insertDashII(123456), '123456');
    assert.strictEqual(insertDashII(40546793), '4054*67-9-3');
    assert.strictEqual(insertDashII(1012356895), '10123-56*89-5');
    })
});
