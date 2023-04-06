function initials(n: string){

        return n.split(" ").map(  (w , i , a) => i!== a.length-1 ? w[0].toUpperCase(): w[0].toUpperCase() + w.slice(1)).join(".")

}


const strictEqual = require('chai').assert.strictEqual;

function doTest(input, expected) {
    const actual = initials(input);
    strictEqual(actual, expected, `for "${input}"`);
}

describe("Tests", () => {
    it("sample tests", () => {
        doTest('code wars', 'C.Wars');
        doTest('Barack hussain obama', 'B.H.Obama');
        doTest('barack hussain Obama', 'B.H.Obama');
    });
});
