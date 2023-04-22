function quadrant(x, y) {
    if (x<0) {if (y<0) {return 3} else {return 2}} else {if (y<0) {return 4} else{return 1}};
}


const {assert} = require("chai");
describe("Fixed", () => {
    const tests = {
        Example: [
            [1, 2, 1], [3, 5, 1], [-10, 100, 2],
            [-1, -9, 3], [19, -56, 4]
        ]
    };
    for (var k of Object.keys(tests)) {
        it(k, () => {
            for (var t of tests[k]) {
                assert.strictEqual(quadrant(t[0], t[1]), t[2]);
            }
        });
    }
});
