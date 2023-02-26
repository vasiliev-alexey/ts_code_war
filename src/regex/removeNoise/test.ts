import {assert} from "chai";
import {removeNoise} from "./solution";

describe("Basic tests", function () {
    it("Testing for code", () => assert.strictEqual(removeNoise("h%e&·%$·llo w&%or&$l·$%d"), "hello world"));


});
