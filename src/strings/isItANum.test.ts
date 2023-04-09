function isItANumTest(str) {
// your code here;

    let matches = str.replaceAll(/\D/gi , '');

    if( matches  && matches.length == 11 && matches[0] == '0') {
        return  matches
    }
    else  {
        return  "Not a phone number"
    }

}




describe("Tests", () => {
    it("test", () => {
        expect(isItANumTest("S:)0207ERGQREG88349F82!efRF)")).toEqual( "02078834982");
        expect(isItANumTest("sjfniebienvr12312312312ehfWh")).toEqual( "Not a phone number");
        expect(isItANumTest("0192387415456")).toEqual( "Not a phone number");
        expect(isItANumTest("v   uf  f 0tt2eg qe0b 8rtyq4eyq564()(((((165")).toEqual( "02084564165");
        expect(isItANumTest("stop calling me no I have never been in an accident")).toEqual( "Not a phone number");
    });
});


function validPhoneNumber(phoneNumber: string){
  return   !!phoneNumber.match(/^\(\d\d\d\) \d\d\d-\d\d\d\d/gm)
}


describe("Tests", () => {
    it("test", () => {
     //  expect(validPhoneNumber("(123) 456-7890")).toEqual( true);
       expect(validPhoneNumber("abc(123) 456-7890")).toEqual( true);
    });
});




function isValidHKPhoneNumber(phoneNumber: string){
    return   !!phoneNumber.match(/^\d\d\d\d \d\d\d\d$/gm)
}
function hasValidHKPhoneNumber(phoneNumber: string){
    return   !!phoneNumber.match(/\d\d\d\d \d\d\d\d/gm)
}


describe("isValidHKPhoneNumber", () => {
    it("should work for example tests (provided in the description)", () => {
        expect(isValidHKPhoneNumber("1234 5678")).toEqual( true);
        expect(isValidHKPhoneNumber("2359 1478")).toEqual( true);
        expect(isValidHKPhoneNumber("85748475")).toEqual( false);
        expect(isValidHKPhoneNumber("3857  4756")).toEqual( false);
        expect(isValidHKPhoneNumber("sklfjsdklfjsf")).toEqual( false);
        expect(isValidHKPhoneNumber("     1234 5678   ")).toEqual( false);
    });
});

describe("hasValidHKPhoneNumber", () => {
    it("should work for example tests", () => {
        expect(hasValidHKPhoneNumber("Hello, my phone number is 1234 5678")).toEqual( true);
        expect(hasValidHKPhoneNumber("I wonder if 2359 1478 is a valid phone number?")).toEqual( true);
        expect(hasValidHKPhoneNumber("85748475 is definitely invalid")).toEqual( false);
        expect(hasValidHKPhoneNumber("'3857  4756' is so close to a valid phone number!")).toEqual( false);
        expect(hasValidHKPhoneNumber("sklfjsdklfjsf")).toEqual( false);
        expect(hasValidHKPhoneNumber("     1234 5678   ")).toEqual( true);
    });
});
