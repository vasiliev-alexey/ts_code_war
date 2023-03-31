function binToDec(bin : string){

    return parseInt(bin, 2)

}


describe("Example Tests", () => {
    it('should ', function () {
        [ ["1",1], ["0",0], ["1001001", 73] ].forEach( ([inp, exp]) => expect( binToDec(inp)).toEqual( exp ) )
    });

});

function digits(n) {
    n.toString().length
}


export const reverseSeq = (n: number): number[] => {
        return  Array.from(Array(n).keys()).map( (_ , i) => n - i);
};

describe("reverseSeq", function() {
    it("Sample Test", function() {
        expect(reverseSeq(5)).toEqual( [5, 4, 3, 2, 1]);
    });
});



function nameShuffler(str : string){
   return  str.split(" ").reverse().join(" ")
}
const chai = require("chai");
const assert = chai.assert;
describe("Tests", () => {
    it("test", () => {
        assert.strictEqual(nameShuffler('john McClane'),'McClane john');
        assert.strictEqual(nameShuffler('Mary jeggins'),'jeggins Mary')
        assert.strictEqual(nameShuffler('tom jerry'),'jerry tom')
    });
});

  function sumMix(x: any[]): number {
return x.map( e => +e).reduce( (a , e) => a+e , 0)
}

describe("sumMix",() => {
    it("Example tests", () => {
        assert.equal(sumMix([9, 3, '7', '3']), 22);
        assert.equal(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
        assert.equal(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);
    });
});


function generateRange(min, max, step){
    const newArray = []

    for (let x = min; x <= max; x += step){
        newArray.push(x)
    }

    return newArray

}

describe("generateRange(2, 10, 2)", function() {
    it(" s" , () => {
        expect(generateRange(2, 10, 2)).toEqual( [2,4,6,8,10]);
    })

});


const cannonsReady = (gunners : Record<string, string>) : string => {
    for (let gunnersKey in gunners) {
        if(gunners[gunnersKey] ==  "nay") {
            return  'Shiver me timbers!';
        }
    }
    return  'Fire!'
}


let a = {'Mike':'aye','Joe':'aye','Johnson':'aye','Peter':'aye'};
let b = {'Mike':'aye','Joe':'nay','Johnson':'aye','Peter':'aye'};

describe("Tests", function(){
    it("should Fire on aye", function(){
        assert.strictEqual(cannonsReady(a), 'Fire!');
    });
    it("should Shiver me timbers on nay", function(){
        assert.strictEqual(cannonsReady(b), 'Shiver me timbers!');
    });
});



export function hello(name = ''): string {

    if(!name)   {
        name = "world"
    }

    let nameI = name.toUpperCase().substring(0,1) + name.toLowerCase().substring(1)

    return  `Hello, ${nameI}!`;
}


describe("Basic tests", () => {
    it("Should pass basic tests", () => {
        assert.equal(hello('johN'), 'Hello, John!')
        assert.equal(hello('alice'), 'Hello, Alice!')
        assert.equal(hello(), 'Hello, World!')
        assert.equal(hello(''), 'Hello, World!')
    });
});


  function firstNonConsecutive (arr: number[]) : null | number {



      for (let i = 1; i < arr.length; i++) {
          if (arr[i] !== arr[i - 1] + 1 && i) {
              return arr[i];

          }



      }
      return null;
}
