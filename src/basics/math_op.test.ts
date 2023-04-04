Math.round = function(number) {

    if(number %1 >= 0.5) {
       return  number +1 - number %1
    } else {
     return    number   - number %1
    }

    return 0; // TODO: fix this
};

Math.ceil = function(number) {
    if (number - parseInt(number) > 0) {
        return parseInt(number) + 1;
    }
    return parseInt(number);
};

Math.floor = function(number) {
    return    number   - number %1
};


const { assert } = require('chai');

describe("Sample Tests", () => {
    it("Math.round", () => {
        assert.strictEqual(Math.round(0.4), 0, 'Math.round(0.4)');
        assert.strictEqual(Math.round(0.5), 1, 'Math.round(0.5)');
    });
    it("Math.ceil", () =>  {
        assert.strictEqual(Math.ceil(0.4), 1, 'Math.ceil(0.4)');
        assert.strictEqual(Math.ceil(0.5), 1, 'Math.ceil(0.5)');
    });
    it("Math.floor", () =>  {
        assert.strictEqual(Math.floor(0.4), 0, 'Math.floor(0.4)');
        assert.strictEqual(Math.floor(0.5), 0, 'Math.floor(0.5)');
    });
});
