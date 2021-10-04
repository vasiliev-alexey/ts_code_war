import chai from "chai";
import {sumCubes} from "./solution";

const assert = chai.assert;
const _ = require("lodash");
chai.config.truncateThreshold = 0;

describe("Sum of Cubes", () => {
    it("Fixed tests", () => {
        _.shuffle([
            [1, 1], [2, 9], [3, 36], [4, 100],
            [10, 3025], [123, 58155876]
        ]).forEach(([n, exp]: [number, number]) => assert.strictEqual(sumCubes(n), exp))
    });
});
