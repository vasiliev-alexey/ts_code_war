function loopArr(arr, direction, steps) {
  return   direction== "left"? arr.slice(steps).concat(arr.slice(0,steps)) :arr.slice(-steps).concat(arr.slice(0,arr.length-steps))
}


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("loopArr", function() {
    it("given [1,5,87,45,8,8], 'left', 2", function() {
        assert.deepEqual(loopArr([1, 5, 87, 45, 8, 8], 'left', 2), [87, 45, 8, 8, 1, 5] );
    });

    it("given [1,5,87,45,8,8], 'right', 2", function() {
        assert.deepEqual(loopArr([1, 5, 87, 45, 8, 8], 'right', 2), [8, 8, 1, 5, 87, 45]);
    });
});
