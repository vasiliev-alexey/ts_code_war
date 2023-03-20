function allNonConsecutive (arr : number[]) {
    return arr.reduce((acc, number, index) => {
        const nextIndex = index + 1
        const nextNumber = arr[nextIndex]

        if (typeof nextNumber === 'undefined' || number + 1 === nextNumber) return acc
        return [...acc, { i: nextIndex, n: nextNumber }]
    }, [])
}

describe('a simple example', function() {
    it('should ',  ()=> {
        const results = allNonConsecutive([1,2,3,4,6,7,8,10])
        expect(results).toEqual( [{i: 4, n:6}, {i: 7, n:10}])
    });

})
