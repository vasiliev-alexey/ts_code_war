function mathEngine(arr: number[]) {
    // const prod = arr.reduce((a, b) => b > 0 ? a * b : a, 1)
    // const sum = arr.reduce((a, b) => b < 0 ? a + b : a, 0)
    // return prod
    // // Your code here
     return !arr ? 0 : arr.filter(e => e <= 0).reduce( (a, b) => a+b , 0) +arr.filter(e => e >= 0).reduce( (a, b) => a*b , 1)




}


describe("Tests", () => {
    it("test", () => {
        expect(mathEngine([1, 2, 3, -4, -5])).toEqual(-3);
    });
});


/*
 function mathEngine(arr) {
    if (!arr) return 0;
    const productOfNonNegative = arr
        .filter((num) => num >= 0)
        .reduce((product, digit) => product * digit, 1);

    const sumOfAllNegatives = arr
        .filter((num) => num < 0)
        .reduce((sum, digit) => sum + digit, 0);

    return productOfNonNegative + sumOfAllNegatives;

}
* */
