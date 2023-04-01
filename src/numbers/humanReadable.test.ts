export function humanReadable(seconds:number):string {

    const s = seconds % 60;
    const m = Math.floor(seconds % 3600 / 60);
    const h = Math.floor(seconds  / 3_600);
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`

}


// See https://www.chaijs.com for how to use Chai.
import { assert } from "chai";

 // https://www.codewars.com/kata/52685f7382004e774f0001f7/train/typescript

describe('examples', function() {
    it('should format correctly', function() {
        assert.equal(humanReadable(0), '00:00:00', 'humanReadable(0)');
        assert.equal(humanReadable(5), '00:00:05', 'humanReadable(5)');
        assert.equal(humanReadable(60), '00:01:00', 'humanReadable(60)');
        assert.equal(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
        assert.equal(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
    });
});
