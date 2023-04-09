function ipToNum(ip: string) {
    return parseInt(ip.split(".").map(o => (+o).toString(2).padStart(8, '0')).join(""), 2);
}

function numToIp(num) {
    let res = [];
    let str = num.toString(2).padStart(32, "0");
    for (let i = 0; i < 4; i++) {
        res.push(parseInt(str.substring(i * 8, i * 8 + 8), 2));
    }
    return res.join(".")
}


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Sample Tests", () => {
    it("ipToNum", () => {
        assert.strictEqual(ipToNum('192.168.1.1'), 3232235777);
        assert.strictEqual(ipToNum('10.0.0.0'), 167772160);
        assert.strictEqual(ipToNum('176.16.0.1'), 2953838593);
    })
    it("numToIp", () => {
        assert.strictEqual(numToIp(3232235777), '192.168.1.1');
        assert.strictEqual(numToIp(167772160), '10.0.0.0');
        assert.strictEqual(numToIp(2953838593), '176.16.0.1');
    })
    it("Combined", () => {
        assert.strictEqual(numToIp(ipToNum('192.168.1.1')), '192.168.1.1');
        assert.strictEqual(numToIp(ipToNum('10.0.0.0')), '10.0.0.0');
        assert.strictEqual(numToIp(ipToNum('176.16.0.1')), '176.16.0.1');
        assert.strictEqual(ipToNum(numToIp(3232235777)), 3232235777);
        assert.strictEqual(ipToNum(numToIp(167772160)), 167772160);
        assert.strictEqual(ipToNum(numToIp(2953838593)), 2953838593);
    })
});
