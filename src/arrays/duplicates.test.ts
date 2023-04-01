function duplicates(arr: any[]) {
    let uniqSet  = new Set();
    let duplicate = [];
    for (let num of arr) {
        if (!uniqSet.has(num)) {
            uniqSet.add(num);
        } else {
            if (!duplicate.includes(num)) {
                duplicate.push(num);    
            }
        }
    }
    return duplicate;
}


describe("Tests", () => {
    it("test", () => {
        expect(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, '5']).length).toEqual(3);
        expect(duplicates([0, 1, 2, 3, 4, 5]).length).toEqual(0);
    });
});
