let resultCache = [];

function sum(num, prev = num) {
    if (num == 0) {
        return 1;
    }

    if (num < 0 || prev == 0) {
        return 0;
    }

    if (resultCache[num] && resultCache[num][prev]) {
        return resultCache[num][prev];
    }
    let total = sum(num, prev - 1) + sum(num - prev, prev);

    if (!resultCache[num]) {
        resultCache[num] = [];
    }
    resultCache[num][prev] = total;

    return total;
}


describe("Tewwsts", () => {

beforeEach( () => {
    resultCache = [];
})

    test("teswwt", () => {

        expect(sum(100)).toEqual(190569292)
        expect(sum(1)).toEqual(1);
        expect(sum(2)).toEqual(2);
        expect(sum(3)).toEqual(3);
        expect(sum(4)).toEqual(5);
        expect(sum(5)).toEqual(7);
        expect(sum(10)).toEqual(42);

    });
});


  function bmi(weight: number, height: number): string {
      let bmi = weight / Math.pow(height , 2);

      if  (bmi<= 18.5) {
      return     "Underweight"
      } else if( bmi <= 25.0) {
          return    "Normal"
      } else if( bmi <= 30.0) {
          return    "Overweight"
      } else {
          return  "Obese"
      }

}


import {assert} from "chai";

describe("Kata.bmi", function() {
    it("should pass a sample test according to the specifications provided", function() {
        assert.strictEqual(bmi(80, 1.80), "Normal");
    });
});


function getNumberFromString(s : string) {
    return +s.replace(/\D/ig, '');
}
describe("Basic tests", function() {
    it("should work as expected", function() {
        expect(getNumberFromString("1")).toEqual( 1);
        expect(getNumberFromString("123")).toEqual( 123);
        expect(getNumberFromString("this is number: 7")).toEqual( 7);
    });
});
