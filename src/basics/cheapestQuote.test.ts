function cheapestQuote(newspapers) {

    let pay = [ [40 , 3.85] , [20 , 1.93 ]  ,  [10 , 0.97] , [5 , 0.49], [1 , 0.10]]
    let rest = newspapers;

    let retVal = 0;
    for (let payElement of pay) {

        if(newspapers >= payElement[0]) {
            retVal =retVal + Math.floor(rest / payElement[0]) * payElement[1];
            rest = rest % payElement[0]

        }


    if(newspapers == 0) {
        break;
    }


    }



return Math.round(retVal*100)/100

}



describe("Tests", () => {
    it("test", () => {
      // expect(cheapestQuote(40)).toEqual( 3.85);
      // expect(cheapestQuote(20)).toEqual( 1.93);
      // expect(cheapestQuote(10)).toEqual( 0.97);
      // expect(cheapestQuote(5)).toEqual( 0.49);
      // expect(cheapestQuote(1)).toEqual( 0.10);

      expect(cheapestQuote(41)).toEqual( 3.95, '41 newspapers should be priced as 40 bundle and a 1 bundle');
      expect(cheapestQuote(80)).toEqual( 7.70, '80 newspapers should be priced as two 40 bundles');
      expect(cheapestQuote(26)).toEqual( 2.52, '26 newspapers should be priced as a 20 bundle, a 5 bundle and a 1 bundle');
    });
});
