function barista(coffees : number[]): number{


    //coffees =  coffees.sort( (a  , b) => a-b);
     let rez = [0];
    coffees.sort( (a  , b) => a-b).map( (e , i) =>  {
          rez.push( rez[rez.length-1]  +  ( i == 0 ? 0 : 2) +e);
     })
    return  rez.reduce( (a, b) => a+b , 0)
}


const chai = require("chai");
const assert = chai.assert;

describe("Fixed Tests", function() {
    it("No Orders Test Case", function() {
        assert.strictEqual(barista([]), 0);
    });
    it("Small Test Cases", function() {
     //   assert.strictEqual(barista([2,10,5,3,9]), 85);
        assert.strictEqual(barista([4,3,2]),22);
         assert.strictEqual(barista([20,5]),32);
         assert.strictEqual(barista([20,5,4,3,1,5,7,8]),211);
         assert.strictEqual(barista([5,4,3,2,1]),55);
    });
});
