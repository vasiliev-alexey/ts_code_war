function findDeletedNumber(arr, mixArr) {
   return arr.filter( v => !mixArr.includes(v))[0]?? 0
}


describe("Tests", () => {
    it("test", () => {
// These are some CW specific test methods available:
//    Test.expect(boolean, [optional] message)
//    Test.assertEquals(actual, expected, [optional] message)
//    Test.assertSimilar(actual, expected, [optional] message)
//    Test.assertNotEquals(actual, expected, [optional] message)

        expect(findDeletedNumber([1,2,3,4,5], [3,4,1,5])).toEqual( 2, 'Deletion')
        expect(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8])).toEqual( 5, 'Deletion')
        expect(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3])).toEqual( 0, 'No deletion')
    });
});
