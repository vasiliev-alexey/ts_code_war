function validParentheses(parens) {
    let arrayOfParens = [...parens].filter(c => c == "(" || c == ")");
    for (let i = 0; i < arrayOfParens.length; i++) {
        if (arrayOfParens[i] === '(' && arrayOfParens[i + 1] === ')') {
            arrayOfParens[i] = 0;
            arrayOfParens[i + 1] = 0;
            arrayOfParens = arrayOfParens.filter((e) => e !== 0);
            i = 0;
        }
        if (arrayOfParens.length === 2 && arrayOfParens[i] === '(' && arrayOfParens[i + 1] === ')') arrayOfParens = [];
    }
    return arrayOfParens.length === 0
}


describe("Tests", () => {
    it(`values: "("`, () => expect(validParentheses("(")).toEqual(false));
    it(`values: ")"`, () => expect(validParentheses(")")).toEqual(false));
    it(`values: ""`, () => expect(validParentheses("")).toEqual(true));
    it(`values: "()"`, () => expect(validParentheses(";()")).toEqual(true));
    it(`values: "())"`, () => expect(validParentheses("())")).toEqual(false));
});
