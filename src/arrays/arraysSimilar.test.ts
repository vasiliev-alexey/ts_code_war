function arraysSimilar(arr1 : [], arr2: []) {
    // TODO: Implement your arraysSimilar

    if(arr1.length != arr2.length) {
        return  false;
    }

    arr1.sort();
    arr2.sort();
    return  arr1.filter(  (v , i) =>  v === arr2[i]).length  == arr1.length;



}


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Example Tests", () => {
    const arr1 = [1, 2, 2, 3, 4],
        arr2 = [2, 1, 2, 4, 3],
        arr3 = [1, 2, 3, 4],
        arr4 = [1, 2, 3, "4"]

    it("Should return true for similar arrays", () => {
        assert.isTrue(arraysSimilar(arr1, arr2));
    });
    it("Should return false for different arrays", () => {
        assert.isFalse(arraysSimilar(arr2, arr3));
        assert.isFalse(arraysSimilar(arr3, arr4));
    })
});
