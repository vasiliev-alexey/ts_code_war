function generateMarkdowns(markdown,text,urlOrLanguage) {

    switch (markdown) {
        case "link" : return `[${text}](${urlOrLanguage})`;
        case "img" : return `![${text}](${urlOrLanguage})`;
        case "code" : return `\`\`\`${urlOrLanguage}\n${text}\n\`\`\``;
    }
};

const {assert} = require("chai");

describe("Sample Tests", function() {
    it('Testing a Link Markdown',function() {
        assert.strictEqual(generateMarkdowns('link','hyperlink','https://en.wikipedia.org/wiki/Hyperlink'),'[hyperlink](https://en.wikipedia.org/wiki/Hyperlink)');
    });
    it('Testing an Image Markdown',function() {
        assert.strictEqual(generateMarkdowns('img','this should be an image','https://github.com/codewars/gna.jpg'),'![this should be an image](https://github.com/codewars/gna.jpg)');
    });
    const code = "function generateMarkdowns(markdown,text,urlOrLanguage) {\n// write your code here\n};"
    const codeBlock = "```javascript\nfunction generateMarkdowns(markdown,text,urlOrLanguage) {\n// write your code here\n};\n```"
    it('Testing a Code Block Markdown',function() {
        assert.strictEqual(generateMarkdowns('code',code,'javascript'),codeBlock);
    });
});
