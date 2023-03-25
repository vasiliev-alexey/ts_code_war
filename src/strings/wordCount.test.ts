function wordCount(s : string) {

    const regexOnlyWords = /[a-z]+/gi;
    const onlyWords = s.match(regexOnlyWords)!.join(" ");
    const regexExcludeWords = /\b(?!(a|the|on|at|of|upon|in|as)\b)[a-z]+/gi;
    return onlyWords.match(regexExcludeWords)!.length;

}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Fixed Tests", () => {
    it("Short texts", () => {
        // assert.strictEqual(wordCount("hello there"), 2)
        // assert.strictEqual(wordCount("hello there and a hi"), 4)
        // assert.strictEqual(wordCount("I'd like to say goodbye"), 6)
        // assert.strictEqual(wordCount("Slow-moving user6463 has been here"), 6)
        // assert.strictEqual(wordCount("%^&abc!@# wer45tre"), 3)
        // assert.strictEqual(wordCount("abc123abc123abc"), 3)
        assert.strictEqual(wordCount("Really2374239847 long ^&#$&(*@# sequence"), 3)
    })
    it("Long text", () => {
        let longText = "I’d been using my sphere as a stool. I traced counterclockwise circles on it with my fingertips and it shrank until I could palm it. My bolt had shifted while I’d been sitting. I pulled it up and yanked the pleats straight as I careered around tables, chairs, globes, and slow-moving fraas. I passed under a stone arch into the Scriptorium. The place smelled richly of ink. Maybe it was because an ancient fraa and his two fids were copying out books there. But I wondered how long it would take to stop smelling that way if no one ever used it at all; a lot of ink had been spent there, and the wet smell of it must be deep into everything."
        assert.strictEqual(wordCount(longText), 112)
    })
})
