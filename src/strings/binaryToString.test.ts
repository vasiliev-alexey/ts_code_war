export function binaryToString(binary: string) {

let res = [];
    for (let  i = 0; i < binary.length/8 ; i++) {

        let num = binary.slice(i * 8 , (i+1) * 8)
        res.push(String.fromCharCode(parseInt(num , 2)));
    }

    return res.join("");
}

// See https://www.chaijs.com for how to use Chai.
import { assert } from "chai"


// TODO Add your tests here
describe("example", function() {
    it("test", function() {
        //Test apha chars
         assert.equal(binaryToString('01100001'), 'a')
        assert.equal(binaryToString('01001011010101000100100001011000010000100101100101000101'), 'KTHXBYE')

        //Test numeric
        assert.equal(binaryToString('00110001001100000011000100110001'), '1011')

        //Test special chars
        assert.equal(binaryToString('001111000011101000101001'), '<:)')
    })
})
