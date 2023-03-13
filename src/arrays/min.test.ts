function min(arr : number[], toReturn: "value"| "index") {
       const min = Math.min(...arr);
       if(toReturn == "value") {
           return min;
       } else  {
           return  arr.indexOf(min);
       }
}


describe("Tests", () => {
    it("test", () => {
        expect(min([1,2,3,4,5], 'value')).toEqual( 1);
        expect(min([1,2,3,4,5], 'index')).toEqual( 0);
    });
});


function strCount(str, letter){
     return str.split("").filter ( c => c==letter).length
    //code here
}


describe("Tests", () => {
    it("test", () => {
        expect(strCount('Hello', 'o')).toEqual( 1);
        expect(strCount('Hello', 'l')).toEqual( 2);
        expect(strCount('',      'z')).toEqual( 0);
    });
});



const removeZeros=a=>eval('['+/[1-9].*[1-9]/.exec(a)+']');


describe("Tests", () => {
    it("test", () => {
        console.log( removeZeros([0, 9, 5, 0, 0, 0, 0, 2, 0, 0]));
    });
});


