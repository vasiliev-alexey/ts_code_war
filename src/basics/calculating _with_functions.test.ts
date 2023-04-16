const factory = (n) => {
    return (arg) => {
        if (typeof arg == "function") {
            return arg(n)
        }
        return n
    }
}
const zero = factory(0);
const one = factory(1);
const two = factory(2);
const three = factory(3);
const four = factory(4);
const five = factory(5);
const six = factory(6);
const seven = factory(7);
const eight = factory(8);
const nine = factory(9);


function plus(arg) {
    return (n) => n + arg
}


function minus(arg) {
    return (n) => n - arg
}

function times(arg) {
    return (n) => n * arg
}

function dividedBy(arg) {
    return (n) => Math.floor(n / arg)
}


const {assert} = require('chai');

describe("Tests", () => {
    it("test", () => {
        assert.strictEqual(seven(times(five())), 35);
        assert.strictEqual(five(times(seven())), 35);
        assert.strictEqual(four (plus     (nine ())), 13);
       assert.strictEqual(eight(minus    (three())),  5);
        assert.strictEqual(six  (dividedBy(two  ())),  3);

    });
});
