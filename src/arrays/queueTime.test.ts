function queueTime(customers : number[], n: number): number {

    if (customers.length === 0) return 0
    if (customers.length <= n) return Math.max(...customers)

    const stack = [...customers]
    let queue = stack.splice(0, n)

    let timeSpent = 0

    while (queue.length) {
        const tick = Math.min(...queue)
        timeSpent += tick

        queue = queue.reduce((acc, time) => {
            const diff = time - tick

            if (diff) {
                acc.push(diff)
            }

            return acc
        }, [])
        console.log(queue)
        const lengthDiff = n - queue.length

        if (stack.length) {
            queue.push(...stack.splice(0, lengthDiff))
        }
    }

    return timeSpent
}

const { assert } = require('chai');

describe("Sample tests", function() {

    it("Simple tests", () => {
       assert.strictEqual(queueTime([], 1), 0);
       assert.strictEqual(queueTime([1,2,3,4], 1), 10);
        assert.strictEqual(queueTime([2,2,3,3,4,4], 2), 9);
        assert.strictEqual(queueTime([1,2,3,4,5], 100), 5);
    });

    it("Examples", () => {
        assert.strictEqual(queueTime([5,3,4],    1), 12);
        assert.strictEqual(queueTime([10,2,3,3], 2), 10);
        assert.strictEqual(queueTime([2,3,10,2], 2), 12);
    });

    //add some more example tests here, if you like
});
//  https://www.codewars.com/kata/57b06f90e298a7b53d000a86
