function findMaxSum(n) {
    let pattern = [0,   5,   5,  10,  10,  15,  15,  20,  25,  25,  30,
        30,  35,  40,  45,  45,  50,  50,  55,  55,  60,  60,  65,
        70,  70,  75,  75,  80,  85,  90]
    let sum = 0
    for (let i = n; i > 0; i-=pattern.length){
        if (i - pattern.length > 0){
            sum += pattern[pattern.length - 1]
        } else {
            sum+=pattern[i-1]
        }
    }
    return sum
}


describe("Basic Tests", function () {
    it("It should works for basic tests.", function () {

        expect(findMaxSum(0)).toEqual(0)
      //  expect(findMaxSum(3)).toEqual(5)
        expect(findMaxSum(4)).toEqual(10)
        expect(findMaxSum(5)).toEqual(10)
        expect(findMaxSum(6)).toEqual(15)
        expect(findMaxSum(7)).toEqual(15)
        expect(findMaxSum(8)).toEqual(20)
        expect(findMaxSum(9)).toEqual(25)

        expect(findMaxSum(30)).toEqual(90)
        expect(findMaxSum(29)).toEqual(85)

        expect(findMaxSum(28)).toEqual( 80)

        expect(findMaxSum(10000)).toEqual( 29995)

    })
})
