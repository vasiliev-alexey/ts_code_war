export function validBraces(braces: string): boolean {

    const matches: Record<string, string> = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    const stack: string[] = [];
    for (let currentChar of [...braces]) {
        if (matches[currentChar]) {
            stack.push(currentChar);
        } else {
            if (currentChar !== matches[stack.pop() || ""]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}


import {assert} from "chai";

describe("solution", function () {
    it("should handle basic tests", function () {
        assert.strictEqual(validBraces("()"), true);
        assert.strictEqual(validBraces("[(])"), false);
    });
});
