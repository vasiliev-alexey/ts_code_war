const flatA = (arr) => {
    let rez =  [];
    for (let a of arr) {
        if (!Array.isArray(a)) {
            rez.push(a)
        } else {
            rez.push(...flatA(a))
        }
    }
    return  rez
}

function flattenTwoLevels(array )  {

    let res = [];

    for (let el of array) {

        if (!Array.isArray(el)) {
            res.push(el)
        } else {
            res.push(flatA(el))
        }
    }


return res;

}

;

const {assert} = require("chai");

describe("flattenTwoLevels", function () {
    it("sample test", function () {
        assert.deepEqual(flattenTwoLevels([1, [2, 3, [], [4, [], 5]]]), [1, [2, 3, 4, 5]]);
    });
});
