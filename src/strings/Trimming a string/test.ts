import { assert } from 'chai';
import {trim} from "./solution";


describe("Sample Tests", () => {
  it("Should pass sample tests", () => {
    assert.strictEqual(trim("Creating kata is fun", 14),"Creating ka...");
    assert.strictEqual(trim("He", 1),"H...");
    assert.strictEqual(trim("Code Wars is pretty rad", 50), "Code Wars is pretty rad");
    assert.strictEqual(trim("NVAOq", 2), "NV...");

  });
});
