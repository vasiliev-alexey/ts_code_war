function pairs(ar : number[]){
    let res = 0;
    for (let i = 0; i < ar.length; i+=2) {
       if( Math.abs(ar[i] -ar[i+1]) ==1 ) {
           res++;
       }
    }
    return res
};


describe("Basic tests", function(){
    it('should ', function () {
        expect(pairs([1,2,5,8,-4,-3,7,6,5])).toEqual(3);
        expect(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94])).toEqual(2);
        expect(pairs([81, 44, 80, 26, 12, 27, -34, 37, -35])).toEqual(0);
        expect(pairs([-55, -56, -7, -6, 56, 55, 63, 62])).toEqual(4);
        expect(pairs([73, 72, 8, 9, 73, 72])).toEqual(3);
    });


});
