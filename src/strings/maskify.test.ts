// return masked string
function   maskify(cc: string): string {

    return cc.substring(cc.length - 4).padStart(cc.length, "#");
}

import { assert } from 'chai'


describe('maskify', function () {
    it('should work for some examples', function () {
        assert.equal(maskify('4556364607935616'), '############5616')
        assert.equal(maskify('1'), '1')
        assert.equal(maskify('11111'), '#1111')
    })
})
