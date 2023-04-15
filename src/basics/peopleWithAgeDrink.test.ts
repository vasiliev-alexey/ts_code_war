function peopleWithAgeDrink(old) {
    switch  (old)  {
        case  old <  14 : return  'drink toddy';
        case  old <  18 : return  'drink coke';
        case  old <  21 : return  'drink beer';

        default : return 'drink whisky'
    }

    return 'ss';
};


const { assert } = require("chai")

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(peopleWithAgeDrink(22), 'drink whisky');
    })
})
