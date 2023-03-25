function catMouse(x :string) : "Escaped!" | "Caught!"{
    console.log( x.match(/C\.{0,3}m/))

    return   x.match(/C\.{0,3}m/ )? "Caught!" : "Escaped!";

}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
describe("Cat and Mouse - Easy Version", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(catMouse('C....m'), "Escaped!");
        assert.strictEqual(catMouse('C..m'), "Caught!");
         assert.strictEqual(catMouse('C.....m'), "Escaped!");
    })
});
