  function dontGiveMeFive(start:number, end:number) : number
{
    return  [...Array.from(Array(end - start+1) ).keys()].map( e => e+start).filter(v => !v.toString().includes("5")).length
}


import {assert} from "chai";

describe("KataTests", function(){
    it("exampleTests", function(){
        assert.equal(dontGiveMeFive(1,9), 8);
        assert.equal(dontGiveMeFive(4,17), 12);
    });
});


