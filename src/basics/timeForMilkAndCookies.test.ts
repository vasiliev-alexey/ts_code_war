function timeForMilkAndCookies(date : Date){
    return date.getDate() == 24 && date.getMonth() ==11
}


const Test = require('@codewars/test-compat');

describe("Tests", () => {
    it("test", () => {
        let year = 2013;
        let month = 11;//Date class is 0 based, so 11 = December
        let day = 24;
       expect(timeForMilkAndCookies(new Date(year, month, day))).toBeTruthy()

        year = 2013;
        month = 10;
        day = 24;
       expect(timeForMilkAndCookies(new Date(year, month, day))).toBeFalsy()
    });
});
