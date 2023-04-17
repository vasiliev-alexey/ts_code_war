function findMinNum(num) {
    let divs = 1;
    let res = 0;
    while (true) {
        res++;
        for (let i = 1; i <= res; i++) if (res % i === 0) divs++;
        if (divs === num) break;
        divs = 0;
    }
    return res;
}

const chai = require("chai");
const assert = chai.assert;

describe("Tests", function() {
    it("Initial tests", function() {
        assert.strictEqual(findMinNum(7), 64);
        assert.strictEqual(findMinNum(8), 24);
    });
});
// const findMinNum=n=>[0,1,2,4,6,16,12,64,24,36,48,1024,60,4096,192,144,120,65536,180,0,240,576,3072,0,360,1296,12288,900,960,0,720,0,840,9216,0,5184,1260,0,0,36864,1680,0,2880,0,15360,3600,0,0,2520,46656,6480,0,0,0,6300,0,6720,0,0,0,5040,0,0,14400,7560,0,46080,0,0,0,25920,0,10080,0,0,32400,0,0,0,0,15120,44100,0,0,20160,0,0,0,0,0,25200,0,0,0,0,0,27720,0,0,0,45360][n];
