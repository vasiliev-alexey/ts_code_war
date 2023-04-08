function combine(...ar) {
    let maxItem = Math.max(...ar.map(a => a.length))
    let res = [];
    for (let i = 0; i < maxItem; i++) {
        for (let arElement of ar) {
            if (!!arElement[i]) {
                res.push(arElement[i]);
            }
        }
    }
    return res
}

describe('Initial Test', () => {
    it('shouldsss ', function () {
        expect(combine(['a', 'b', 'c'], [1, 2, 3])).toEqual(['a', 1, 'b', 2, 'c', 3]);
        // expect(combine(['a', 'b', 'c'], [1, 2, 3, 4, 5])).toEqual( ['a', 1, 'b', 2, 'c', 3, 4, 5]);
        // expect(combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8])).toEqual(['a', 1, 6, 8, 'b', 2, 7, 'c', 3, 4, 5]);
    });

});
