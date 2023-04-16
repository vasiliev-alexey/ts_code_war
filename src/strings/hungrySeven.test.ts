function hungrySeven(arr : number[]){
   let  arrStr = arr.join``;
    while (/789/.test(arrStr)) arrStr = arrStr.replace(/789/g, "897");
    return arrStr.split("").map(v => v * 1);
}



const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic Tests", function(){
    it("Tests", () => {
        assert.deepEqual(hungrySeven([7,8,9]), [8,9,7]);
        assert.deepEqual(hungrySeven([7,7,7,8,9]),[8,9,7,7,7]);
        assert.deepEqual(hungrySeven([8,7,8,9,8,9,7,8]),[8,8,9,8,9,7,7,8]);
        assert.deepEqual(hungrySeven([8,7,8,7,9,8]),[8,7,8,7,9,8]);
    })
});
