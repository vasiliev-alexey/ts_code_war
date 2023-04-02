function removeParentheses(s :  string){

    let res = [];
    let open = 0;
    for (let c of s.split("")) {
        if(c == "(") {
            open++;
            continue
        } else if  (c == ")") {
            open--
            continue
        }
        if(open == 0)  {
            res.push(c)
        }
    }

    return res.join("")

}


// You can use `chai` for assertions.
const chai = require("chai");
const assert = chai.assert;
// Uncomment the following line to disable truncating failure messages for deep equals, do:
// chai.config.truncateThreshold = 0;
// Since Node 12, we no longer include assertions from our deprecated custom test framework by default.
// Uncomment the following to use the old assertions:
// const Test = require("@codewars/test-compat");

describe("Solution", function() {
    it("Basic Tests", function() {
        assert.strictEqual(removeParentheses("example(unwanted thing)example"), "exampleexample")
        assert.strictEqual(removeParentheses("example (unwanted thing) example"), "example  example")
        assert.strictEqual(removeParentheses("a (bc d)e"), "a e")
        assert.strictEqual(removeParentheses("a(b(c))"), "a")
        assert.strictEqual(removeParentheses("hello example (words(more words) here) something"), "hello example  something")
        assert.strictEqual(removeParentheses("(first group) (second group) (third group)"), "  ")
    });
});
