function happyCoding(nickname2) {
    let nickname = nickname2.toLowerCase().split(" ");

    if (nickname.indexOf("happy") >= 0 && nickname.indexOf("coding") >= 0
        && nickname.indexOf("happy") < nickname.indexOf("coding")) {
        return 1
    }
    ;
    if (nickname.indexOf("coding") >= 0 && nickname.indexOf("happy") >= 0) {
        return 2
    }
    ;
    if (nickname.includes("coding")) {
        return 3
    }
    ;
    if (nickname.includes("happy")) {
        return 4
    }
    ;

    return 5;


}


describe("Basic Tests", function () {
    it("It should works for basic tests.", function () {

        expect(happyCoding("Happy coding")).toEqual(1)
        expect(happyCoding("happy Coding")).toEqual(1)
        expect(happyCoding("coding happy")).toEqual(2)
        expect(happyCoding("coding everyday")).toEqual(3)
        expect(happyCoding("happy programmer")).toEqual(4)
        expect(happyCoding("unhappy codewarrior")).toEqual(5)
        expect(happyCoding("happyyyyy codinggggg")).toEqual(5)

    })
})
