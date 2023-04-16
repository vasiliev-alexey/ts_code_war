const False = false, True = true, None = null;

function multImplication(arr: boolean[]) {
    if (arr.length == 0) {
        return null;
    }
    let res = True
    for (let el of arr) {
        res = !res || el
    }
    return res
}

describe("Tests", () => {
    it("test", () => {
        expect(multImplication([False, False])).toEqual(True);
        expect(multImplication([False, True])).toEqual(True);
        expect(multImplication([True, False])).toEqual(False);
        expect(multImplication([True, True])).toEqual(True);
        expect(multImplication([False])).toEqual(False);
        expect(multImplication([True])).toEqual(True);
        expect(multImplication([])).toEqual(None);
        expect(multImplication([False, False, False, False, False, True, True, False])).toEqual(False);
        expect(multImplication([False, False, True, True, True, True, True, False])).toEqual(False);
        expect(multImplication([True, False, True, False, False, True, False, False])).toEqual(True);
    });
});


/*
def mult_implication(lst):
    if lst == []: return None
    res = True
    for el in lst:
        res = not res or el
    return res
* */
