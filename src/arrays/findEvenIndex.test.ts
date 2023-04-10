export function findEvenIndex(arr: number[]): number
{
      let total = arr.reduce( (a,b) => a + b,0);
        let current = 0;
    for (let i = 0; i < arr.length ; i++) {
        if(current  == (total-arr[i])/2 ) {
            return  i
        }
        current += arr[i];
    }
    return  -1;
}


import { assert } from "chai";


describe("FindEvenIndex", () => {
    it("Tests", () => {
        assert.equal(findEvenIndex([1,2,3,4,3,2,1]), 3, "The array was: [1,2,3,4,3,2,1] \n");
        assert.equal(findEvenIndex([1,100,50,-51,1,1]),1, "The array was: [1,100,50,-51,1,1] \n");
        assert.equal(findEvenIndex([1,2,3,4,5,6]),-1, "The array was: [1,2,3,4,5,6] \n");
        assert.equal(findEvenIndex([20,10,30,10,10,15,35]),3, "The array was: [20,10,30,10,10,15,35] \n");
    });
});

function equalize(array){
  return    array.map( (v ,i) => i==0? "+0" : (Math.sign(v-array[0])==1?"+":"-").concat( Math.abs((v-array[0])).toString()) )
}





describe("Basic Tests", () => {
    it("Tests", () => {
        assert.deepEqual(equalize([20,30,35,10]),(["+0","+10","+15","-10"]));
       // assert.deepEqual(equalize([]),([]));
      //  assert.deepEqual(equalize([10,12,24,50,0,15,20]),(["+0","+2","+14","+40","-10","+5","+10"]));
    });
});


export function position(alphabet:string):string {
    return (alphabet.charCodeAt(0) -65).toString();
}

export function time(distance:number,boatSpeed:number,stream:String):number{
    let upDown = stream.split(" ");
    if(upDown[0] == "Downstream") {
     return  Math.round(distance *100/ ( boatSpeed + +upDown[1]))/100
    }
    return  Math.round(distance *100 / ( boatSpeed - +upDown[1]))/100
}
describe("solution", function(){
    it("Basic Tests", function() {
        assert.equal(time(24,10,"Downstream 2"),2);
        assert.equal(time(24,14,"Upstream 2"),2);
        assert.equal(time(54,28,"Downstream 3"),1.74);
    });
});
