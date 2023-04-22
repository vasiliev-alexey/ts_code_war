function elimination(arr : number[]){

    return arr.filter( e => arr.filter( v => v==e).length == 2)[0]|| null
}


describe("Elimination", function(){
    it("should work for some examples",function(){
        expect(elimination([2,5,34,1,22,1])).toEqual( 1, "twins are 1s");
        expect(elimination([2,2,34,1,22])).toEqual( 2, "twins are 2s");
        expect( elimination([2,5,34,1,22])).toEqual( null, "There are no twins in the city");
    });
});
