
enum Issuer {
  VISA = 'VISA',
  AMEX = 'AMEX',
  Mastercard = 'Mastercard',
  Discover = 'Discover',
  Unknown = 'Unknown',
}
import {assert} from "chai";

export const getIssuer = (x: number): Issuer => {

    let str = x.toString();

    if((str.length == 13 || str.length == 16) && str.substring(0,1) =="4") {
        return  Issuer.VISA
    } else   if(str.length == 16 && str.substring(0,4) =="6011") {
        return Issuer.Discover
    } else   if(str.length == 15 && ["34", "37"].includes(str.substring(0,2))) {
        return Issuer.AMEX
    } else  if(str.length == 16 &&  ["51", "52", "53", "54" ,"55"].includes(str.substring(0,2))) {
        return Issuer.Mastercard
    } else  {
        return Issuer.Unknown
    }


/*
| AMEX       | 34 or 37             | 15            |
| Discover   | 6011                 | 16            |
| Mastercard | 51, 52, 53, 54 or 55 | 16            |
| VISA       | 4                    | 13 or 16      |
* */
};


describe("getIssuer", function() {
    it("It should detect a VISA card", function() {
        assert.equal(getIssuer(4111111111111111), Issuer.VISA);
        assert.equal(getIssuer(442117531024), Issuer.Unknown);

        assert.equal(getIssuer(378282246310005), Issuer.AMEX);
        assert.equal(getIssuer(9111111111111111), Issuer.Unknown);
    });
});
