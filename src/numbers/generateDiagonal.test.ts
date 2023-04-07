function generateDiagonal(n, l){

    if (l == 1) {
        return [];
    }
    let res = [];
    res.push(1);

    for (let k = 1; k < l ; k++) {

        let last = res[res.length-1];
        let val = last *  (n + k) / k ;
        res.push(val);
    }
   return  res

}


const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Example tests",function(){
    it("Diagonal 2, length 5",function(){
        assert.deepEqual(generateDiagonal(2, 5),[1, 3, 6, 10, 15]);
    });
    it("Diagonal 1, length 10",function(){
        assert.deepEqual(generateDiagonal(1, 10),[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    it("Diagonal 3, length 7",function(){
        assert.deepEqual(generateDiagonal(3, 7),[1, 4, 10, 20, 35, 56, 84]);
    });
})


