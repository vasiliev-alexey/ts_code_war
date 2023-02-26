import { assert } from "chai";
import { solve } from "./solution";

describe("Basic tests", function() {
  it("Testing for code", () => assert.strictEqual(solve("code"), "code"));
  it("Testing for CODe", () => assert.strictEqual(solve("CODe"), "CODE"));
  it("Testing for COde", () => assert.strictEqual(solve("COde"), "code"));
  it("Testing for Code", () => assert.strictEqual(solve("Code"), "code"));
});
