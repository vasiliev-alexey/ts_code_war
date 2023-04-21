var greatestDistance = function(data : number[]) {

    let res = 0;
    for (let i = 0; i < data.length; i++) {
        const distance = data.lastIndexOf(data[i]) - i;
         if (distance > res) res = distance;
    }
    return res;
};



describe('method: greatestDistance', function() {
    it('returns the distance between the 7\'s at index 1 and 5', function() {
       expect(greatestDistance([9,7,1,2,3,7,0,-1,-2])).toEqual( 4);
    });
    it('returns the distance between the 0\'s at index 0 and 6', function() {
        expect(greatestDistance([0,7,0,2,3,7,0,-1,-2])).toEqual( 6);
    });
    it('returns the zero because there are no matching values', function() {
        expect(greatestDistance([1,2,3,4])).toEqual( 0);
    });
});
