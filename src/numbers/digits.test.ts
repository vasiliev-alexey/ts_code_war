function digits(num){
    let digs =  num.toString().split("").map( e => +e);
     let rez = [];
    for (let i = 0; i < digs.length; i++) {
        for (let j = i+1; j < digs.length; j++) {
            rez.push( digs[i] +digs[j])
        }
    }
   return rez

}


describe("Basic tests", function () {
    it( "1" , () => {
        expect(digits(156)).toEqual( [ 6, 7, 11 ]);
        expect(digits(81596)).toEqual( [ 9, 13, 17, 14, 6, 10, 7, 14, 11, 15 ]);
        expect(digits(3852)).toEqual( [ 11, 8, 5, 13, 10, 7 ]);
        expect(digits(3264128)).toEqual( [ 5, 9, 7, 4, 5, 11, 8, 6, 3, 4, 10, 10, 7, 8, 14, 5, 6, 12, 3, 9, 10 ]);
        expect(digits(999999)).toEqual( [ 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18 ]);
    })

})
