function solution(s, t) {

    let distanceToRun = s * t;
    const maxSprints = Math.ceil(t / 2);
    console.log(maxSprints)
    for (let i = 0; i < maxSprints; i++) {

        if (s - 3 * i > 0)  {
            console.log(distanceToRun)
            distanceToRun += s - 3 * i;
        }
    }

    return distanceToRun;

}


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Example test cases", function() {
    it("Test case in description", function() {
      //  assert.strictEqual(solution(2, 4), 10);
      //  assert.strictEqual(solution(49, 50), 2875);
        assert.strictEqual(solution(741, 4), 4443);
    });
});
