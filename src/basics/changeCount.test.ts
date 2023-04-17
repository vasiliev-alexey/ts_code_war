// Remember you have a CHANGE dictionary to work with ;)

function changeCount(change: string) {

    let money = change.split(" ").map(w => {
        switch (w) {
            case     "penny":
                return 0.01;
            case    "nickel":
                return 0.05;
            case      "dime":
                return 0.10;
            case   "quarter":
                return 0.25;
            case    "dollar":
                return 1.00;
        }

    }).reduce((a,b) => a +b  , 0)
    return `$${money.toFixed(2)}`
}


describe("Tests", () => {
    it("test", () => {
        expect(changeCount('dime penny dollar')).toEqual('$1.11')
        expect(changeCount('dime penny nickel')).toEqual('$0.16')
        expect(changeCount('quarter quarter')).toEqual('$0.50')
        expect(changeCount('dollar penny dollar')).toEqual('$2.01')
        expect(changeCount('dollar dollar dollar dollar dollar dollar dollar dollar dollar dollar penny')).toEqual('$10.01')
    });
});
