function removeDuplication(arr : number[]){
    // Here you Go!
    return arr.filter(  (e , i ) => arr.indexOf(e) == arr.lastIndexOf(e));
}


describe("Basic tests", function(){
    it("q" , () => {
        expect(removeDuplication([1,2,3,2,4,6,2,6,7])).toEqual( [1,3,4,7]);
        expect(removeDuplication([1,2,1,2,1,1,2,2])).toEqual( []);
        expect(removeDuplication([2,5,6,7,5,2,6])).toEqual( [7]);
    })

});


export function removeDuplicateWords(s: string): string {
     return  [ ...new Set  (s.split(" "))].join(" ");

}

import {assert} from "chai";

describe("Sample Test Cases", function(){
    it("Should return a string", function() {
        assert.equal(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), 'alpha beta gamma delta');
    });
});



