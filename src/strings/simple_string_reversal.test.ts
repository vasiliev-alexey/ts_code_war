function solve(str : string){
    let   chars = str.split("").filter( c =>  c != ' ');
   return  str.split("").map( c =>     c!== " "?  chars.pop() :  c ).join("")
}

describe("Basic tests", function(){
    it('should ', function () {
        expect(solve("codewars")).toEqual("srawedoc");
        expect(solve("your code")).toEqual("edoc ruoy");
        expect(solve("your code rocks")).toEqual("skco redo cruoy");
        expect(solve("i love codewars")).toEqual("s rawe docevoli");
    });

});
