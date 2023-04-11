export const convertFrac = (lst) => {

    const factors = (n)  => {
        const f  = { 1 : 1 }
        let actual = 2
        while (n > 1 && n >= actual) {
            if (n % actual) {
                actual++
            } else {
                f[actual] = f[actual] ? f[actual] + 1 : 1
                n /= actual
            }
        }
        return f
    }

    const calculateLcm = (allFactors) => {
        return Object.entries(
            allFactors.reduce((a,f) => {
                for (let [value, times] of Object.entries(f)) {
                    if (!a[value] || a[value] < times) a[value] = times
                }
                return a
            }, {})
        ).reduce((a, [value,times]) => a*(Math.pow(value, times)), 1)
    }


    const allFactors = lst.map(([_, denom]) => factors(denom))
    console.log(allFactors);
     const lcm = calculateLcm( allFactors )
    console.log("lcm" , lcm);

    return lst.reduce((a,[numer, denom]) => {
        return `${a}(${(lcm/denom)*numer},${lcm})`
    }, "")

}



import {assert} from "chai";

describe("Fixed Tests", function() {
    it("Basic tests convertFrac", function() {
        assert.strictEqual(
            convertFrac([[1, 2], [1, 3], [1, 4]]),
            "(6,12)(4,12)(3,12)"
        );
        assert.strictEqual(
            convertFrac([[69, 130], [87, 1310], [3, 4]]),
            "(18078,34060)(2262,34060)(25545,34060)"
        );
        // assert.strictEqual(
        //     convertFrac([[1, 2], [4, 5], [3, 4], [6, 9], [7, 10]]),
        //     "(30,60)(48,60)(45,60)(40,60)(42,60)"
        // );
    });
});

