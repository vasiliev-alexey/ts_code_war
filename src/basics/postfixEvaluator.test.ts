function postfixEvaluator(string) {

    let expressions = string.split(" ");
    const operators = ["+", "-", "*", "/", "(", ")", "%", "?"];
    let argStack = [];
    let x = 0, y = 0;
    console.log(expressions);

    for (let exp of expressions) {
        if (operators.includes(exp)) {
            x = +argStack.pop();
            y = +argStack.pop();
            switch (exp) {
                case "%": {
                    argStack.push(y % x);
                    break;
                }
                case "*": {
                    argStack.push(y * x);
                    break;
                }
                case "/": {
                    argStack.push(parseInt((y / x).toString()));
                    break;
                }
                case "+":
                    argStack.push(y + x);
                    break;
                case "-":
                    argStack.push(y - x);
                    break;
            }
        }
        else {
            argStack.push(exp);
        }
    }

    return argStack.pop();
}

describe('simple addition:', function () {
    it("2 3 + =5", function () {
        expect(postfixEvaluator("2 3 +")).toEqual(5);
    });
    it("20 40 + 60 *", function () {
        expect(postfixEvaluator("20 40 + 60 *")).toEqual(3600);
    });
    it("20 40 60 + *", function () {
        expect(postfixEvaluator("20 40 60 + *")).toEqual(2000);
    });

});
