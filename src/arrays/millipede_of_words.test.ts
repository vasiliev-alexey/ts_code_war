function solution(words) {
    const result = [];

    let inTwoLetters = words.map(item => item[0] + item.slice(-1));

    for (let i = 0; i < words.length; i += 1) {
        inSort();
    }

    function inSort() {
        if (inTwoLetters.length) {
            inTwoLetters = inTwoLetters.concat(result);
            result.splice(0, result.length);
            for (let i = 0; i < words.length; i += 1) {
                inTwoLetters.forEach((item, idx) => {
                    if (!result.length) {
                        result.push(...inTwoLetters.splice(0, 1));
                    } else if (result[0][0] === item[1]) {
                        result.unshift(...inTwoLetters.splice(idx, 1));
                    } else if (result[result.length - 1][1] === item[0]) {
                        result.push(...inTwoLetters.splice(idx, 1));
                    }
                });
            }
        }
    }

    return result.length === words.length;
}
const chai = require("chai")
const assert = chai.assert
chai.config.truncateThreshold = 0

describe("Fixed test cases", function() {
    it("True test in description", function() {
        assert.strictEqual(solution(["excavate", "endure", "desire", "screen", "theater", "excess", "night"]), true)
    })
    it("False test in description", function() {
        assert.strictEqual(solution(["trade", "pole", "view", "grave", "ladder", "mushroom", "president"]), false)
    })
    it("Five words", function() {
        assert.strictEqual(solution(["screen", "desire", "theater", "excess", "night"]), true)
    })
    it("Four words", function() {
        assert.strictEqual(solution(["engine", "endure", "elite", "excess"]), true)
    })
    it("One letter words", function() {
        assert.strictEqual(solution(["east", "e", "e", "t", "t", "e", "time"]), true)
    })
    it("One more test", function() {
        assert.strictEqual(solution(["no", "dog", "on", "good"]), false)
    })
})
