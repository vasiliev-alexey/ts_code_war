function factorSum(n): number {

    let res = n;
    let a, b;
    do {
        let c = 2;
        a = res;
        b = res;
        res = 0;

        while (b >= Math.pow(c, 2)) {
            if (!(b % c)) {
                b = b / c;
                res = res + c;
            } else ++c;
        }
        res += b;
    } while (res !== a);

    return res;


}

const Test = require('@codewars/test-compat');

describe("Basic Tests", function () {
    it("It should works for basic tests.", function () {

        expect(factorSum(24)).toEqual(5)

        expect(factorSum(35)).toEqual(7)

        expect(factorSum(156)).toEqual(5)

        expect(factorSum(4)).toEqual(4)

        expect(factorSum(31)).toEqual(31)

    })
})
