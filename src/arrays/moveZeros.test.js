function moveZeros(arr ) {
    return arr.filter((x) => x !== 0)
         .concat(arr.filter((x) => x === 0))
}


const {assert, config} = require("chai");
config.truncateThreshold = 0;

describe("Tests", () => {
    it("test", () => {
         assert.deepEqual(moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
    });
});
