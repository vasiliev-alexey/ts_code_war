export function flip(dir: "R" | "L", arr: number[]): number[] {
    // Your code here
    return arr.sort((x: number, y: number) => {
        if (dir === "R") return x - y;
        if (dir === "L") return y - x;
        return 0
    });
}


import {assert} from "chai";


describe("Gravity Flip", () => {
    it("Sample tests", () => {
        assert.deepEqual(flip('R', [3, 2, 1, 2]), [1, 2, 2, 3]);
        assert.deepEqual(flip('L', [1, 4, 5, 3, 5]), [5, 5, 4, 3, 1]);
    });
});


export function updateLight(current: string): string {
    return  current == "green" ? "yellow" :
        current ==  "yellow" ? "red" :
            "green"
}


describe("Thinkful - Logic Drills: Traffic light", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(updateLight("green"), "yellow");
        assert.strictEqual(updateLight("yellow"), "red");
        assert.strictEqual(updateLight("red"), "green");
    });
});


function isSameLanguage(list: []) {
   let set =  new Set (list.map( d =>  d.language));
    return set.size ==1;
}

describe("Tests", () => {
    it("test", () => {
        var list1 = [
            { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
            { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
            { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
        ];

        var list2 = [
            { firstName: 'Mariami', lastName: 'G.', country: 'Georgia', continent: 'Europe', age: 29, language: 'Python' },
            { firstName: 'Mia', lastName: 'H.', country: 'Germany', continent: 'Europe', age: 39, language: 'Ruby' },
            { firstName: 'Maria', lastName: 'I.', country: 'Greece', continent: 'Europe', age: 32, language: 'C' },
        ];

        expect(isSameLanguage(list1)).toEqual( true);
        expect(isSameLanguage(list2)).toEqual( false);
    });
});




const countSheep = function (num){
   return  num ==0 ? "" : Array.from(Array(num).keys()).map( e => e+1+" sheep...").join("")
}


describe("Fixed tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(countSheep(0), "");
        assert.strictEqual(countSheep(1), "1 sheep...");
        assert.strictEqual(countSheep(2), "1 sheep...2 sheep...");
        assert.strictEqual(countSheep(3), "1 sheep...2 sheep...3 sheep...");
    });
});
