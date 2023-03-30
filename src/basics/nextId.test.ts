export function nextId(ids: number[]): number {
    const x = ids[1] - ids[0];

    for (let i = 0; i < ids.length; i++) {
        if (ids[i] + x !== ids[i+1]) {
            return ids[i]+x;
        }
    }


}

import { assert } from "chai";
describe("Basic test", () => {
    it("Should pass basic tests", () => {
        assert.equal(nextId([0,1,2,3,5]), 4);
        assert.equal(nextId([0,1,2,3,4,5,6,7,8,9,10]), 11);
    });
});
