var wordCounter = function (text) {
    const data = text.split(/\.|,| /).filter(w => w.length > 0);
    const m = {};
    for (let i = 0; i < data.length; i++) {
        let t = "~" + data[i];
        if (!m[t]) {
            m[t] = 1;
        } else {
            m[t] = m[t] + 1
        }
    }
    return {
        count: (pat) => {
            return !m["~" + pat] ? 0 : m["~" + pat]
        }
    }
};


describe("Tests", () => {
    it("test", () => {
        var counter = wordCounter("Lorem ipsum");
        expect(counter.count("Lorem")).toEqual(1);
        expect(counter.count("hey")).toEqual(0);
        expect(counter.count("constructor")).toEqual(0);

    });
});



function capitalize(s,arr) {
    return s.split("").map((c, i) => arr.includes(i) ? c.toUpperCase() : c).join("");
};

describe("Basic tests", function(){
    it('should ', function () {
        expect(capitalize("abcdef",[1,2,5])).toEqual('aBCdeF');
        expect(capitalize("abcdef",[1,2,5,100])).toEqual('aBCdeF');
        expect(capitalize("codewars",[1,3,5,50])).toEqual('cOdEwArs');
        expect(capitalize("abracadabra",[2,6,9,10])).toEqual('abRacaDabRA');
        expect(capitalize("codewarriors",[5])).toEqual('codewArriors');
        expect(capitalize("indexinglessons",[0])).toEqual('Indexinglessons');
    });

});
