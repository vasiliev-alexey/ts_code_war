function solve(arr){
    let mapFr = new Map();
    for (let el of arr) {
        mapFr.set( el , (mapFr.get(el)||0)+1 )
    }
    arr.sort( (a , b ) =>  (mapFr.get(b) - mapFr.get(a)) == 0? a  -b :  mapFr.get(b) - mapFr.get(a) )
    return arr
}
//https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc

describe("Basic tests", function(){
    it('should ', function () {
        expect(solve([2,3,5,3,7,9,5,3,7])).toEqual([3,3,3,5,5,7,7,2,9])
        expect(solve([1,2,3,0,5,0,1,6,8,8,6,9,1])).toEqual([1,1,1,0,0,6,6,8,8,2,3,5,9])
        expect(solve([5,9,6,9,6,5,9,9,4,4])).toEqual([9,9,9,9,4,4,5,5,6,6])
        expect(solve([4,4,2,5,1,1,3,3,2,8])).toEqual([1,1,2,2,3,3,4,4,5,8])
        expect(solve([4,9,5,0,7,3,8,4,9,0])).toEqual([0,0,4,4,9,9,3,5,7,8])
    });

});
