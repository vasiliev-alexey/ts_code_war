export function jumpingNumber(n: number) {
    let res = n.toString().split("").map( x => +x);

    for (let i = 0; i < res.length -1 ; i++) {
            if( Math.abs(res[i]- res[i+1]) != 1) {
                return "Not!!";
            }

    }
   return  "Jumping!!"
}


import { assert } from "chai";


describe("Basic tests", () => {
    it("Testing for 1", () => assert.strictEqual(jumpingNumber(1), "Jumping!!"));
    it("Testing for 7", () => assert.strictEqual(jumpingNumber(7), "Jumping!!"));
    it("Testing for 9", () => assert.strictEqual(jumpingNumber(9), "Jumping!!"));
    it("Testing for 23", () => assert.strictEqual(jumpingNumber(23), "Jumping!!"));
    it("Testing for 32", () => assert.strictEqual(jumpingNumber(32), "Jumping!!"));
    it("Testing for 79", () => assert.strictEqual(jumpingNumber(79), "Not!!"));
    it("Testing for 98", () => assert.strictEqual(jumpingNumber(98), "Jumping!!"));
    it("Testing for 8987", () => assert.strictEqual(jumpingNumber(8987), "Jumping!!"));
    it("Testing for 4343456", () => assert.strictEqual(jumpingNumber(4343456), "Jumping!!"));
    it("Testing for 98789876", () => assert.strictEqual(jumpingNumber(98789876), "Jumping!!"));
});


export function specialNumber(n: number) {
     return   !n.toString().match(/[6789]/g) ? "Special!!": "NOT!!"
}


describe("Basic tests", () => {
    it("Testing for 2", () => assert.strictEqual(specialNumber(2), "Special!!"));
    it("Testing for 3", () => assert.strictEqual(specialNumber(3), "Special!!"));
    it("Testing for 6", () => assert.strictEqual(specialNumber(6), "NOT!!"));
    it("Testing for 9", () => assert.strictEqual(specialNumber(9), "NOT!!"));
    it("Testing for 11", () => assert.strictEqual(specialNumber(11), "Special!!"));
    it("Testing for 55", () => assert.strictEqual(specialNumber(55), "Special!!"));
    it("Testing for 26", () => assert.strictEqual(specialNumber(26), "NOT!!"));
    it("Testing for 92", () => assert.strictEqual(specialNumber(92), "NOT!!"));
    it("Testing for 25432", () => assert.strictEqual(specialNumber(25432), "Special!!"));
    it("Testing for 2783", () => assert.strictEqual(specialNumber(2783), "NOT!!"));
});


export function automorphic(n: number): string {
  return   Math.pow(n, 2).toString().endsWith(n.toString())? "Automorphic" : "Not!!"
}


export function tidyNumber(num: number): boolean {
    let res = num.toString().split("").map( x => +x);

    for (let i = 0; i < res.length -1 ; i++) {
        if( res[i] >res[i+1]) {
            return  false
        }

    }
    return   true
}

describe("Basic tests", () => {
    it("Testing for 12", () => assert.strictEqual(tidyNumber(12), true));
    it("Testing for 102", () => assert.strictEqual(tidyNumber(102), false));
    it("Testing for 9672", () => assert.strictEqual(tidyNumber(9672), false));
    it("Testing for 2789", () => assert.strictEqual(tidyNumber(2789), true));
    it("Testing for 2335", () => assert.strictEqual(tidyNumber(2335), true));
});


function addOne( x) {
    let m = 1;

    while( x & m ) {
        x = x ^ m;
        m <<= 1;
    }
    x = x ^ m;
    return x;
}

function subtractOne(x)
{
    let m = 1;
    while (!(x & m)) {
        x = x ^ m;
        m <<= 1;
    }
    x = x ^ m;
    return x;
}

function add(x, y)
{


    // let min = Math.min(x , y);
    // let max = Math.max(x , y);
    //
    // let  inc = Math.abs(max) ==max;
    //
    // for (let i = 1; i <=  Math.abs(max); i = addOne(i))
    // {
    //     if(inc) {
    //         min = addOne(min)
    //     } else {
    //         min = subtractOne(min);
    //     }
    //
    // }
    // return min;
    while (y != 0) {
        const bits = x & y;
        x = x ^ y;
        y = bits << 1;
    }
    return x;
}

describe("Sum two intgers", function()
{
    it("Check positive values", function()
    {
        expect(add(1, 2)).toEqual( 3)
        expect(add(5,19)).toEqual( 24)
        expect(add(23,17)).toEqual( 40)
    })
    it("Check negative values", function()
    {
        expect(add(-14,-16)).toEqual( -30);
        expect(add(-50,-176)).toEqual( -226);
        expect(add(-10,-29)).toEqual( -39);
    })
    it("Check mixture values", function()
    {
        expect(add(-13,13)).toEqual( 0);
        expect(add(-27,18)).toEqual( -9);
        expect(add(-90,30)).toEqual( -60);
    })
})


smallEnough=(a,l)=>a.some(c=>c>l)

describe("Example tests",() =>{
    it('should ', function () {
       // expect(smallEnough([66, 101], 200)).toEqual( true);
        expect(smallEnough([[ 1, 1, 1, 1, 1, 2 ]], 1)).toEqual( false);
    });


})
//smallEnough=(a,l)=>a.every(c=>c<=l)
