function highestBiPrimeFac(p1 : number, p2: number, n: number) {

     let min = Math.min( p1, p2);
    let res = [];
    let tmpMax = 0;
     let iter =  Math.ceil(Math.pow(n , 1/min));
    console.log(iter) ;

    for (let i = 1; i <= iter*2 ; i++) {
        for (let j = 1; j <= iter*2; j++) {
            let  t = Math.pow(p1 , i) * Math.pow(p2, j);

           if(   t <= n &&   t >= tmpMax ) {
               tmpMax = t;
               res[0] = [tmpMax , i , j]
           }

        }
    }
    return   res[0]
}




describe("Basic tests", function() {
    it("highestBiPrimeFac", function() {

        expect((highestBiPrimeFac(2, 31, 50000))).toEqual( [31744, 10, 1]);
        expect((highestBiPrimeFac(2, 3, 50))).toEqual( [48, 4, 1]);
        expect((highestBiPrimeFac(5, 11, 1000))).toEqual( [605, 1, 2]);
        expect((highestBiPrimeFac(3, 13, 5000))).toEqual( [4563, 3, 2]);
        expect((highestBiPrimeFac(5, 7, 5000))).toEqual( [4375, 4, 1]);
    })})
