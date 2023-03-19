function sortArray(array: number[]) {
    let oddArray = array.filter((e, i) => e % 2 != 0).sort((a, b) => b - a);
    return array.map((e, i) => e % 2 != 0 ? oddArray.pop() : e);


}


describe("Sample Tests", () => {
    it("should pass some sample tests", () => {
        expect(sortArray([5, 3, 2, 8, 1, 4])).toEqual([1, 3, 2, 8, 5, 4]);
        expect(sortArray([5, 3, 1, 8, 0])).toEqual([1, 3, 5, 8, 0]);
        expect(sortArray([])).toEqual([]);
        expect(sortArray([5, 3, 2, 8, 1, 4, 11])).toEqual([1, 3, 2, 8, 5, 4, 11]);
        expect(sortArray([37, 22, 42, 46, -17, -16, 8, -35])).toEqual([-35, 22, 42, 46, -17, -16, 8, 37]);
    });
});


function sortArray2(array) {
    let oddArray = array.filter((e, i) => e % 2 != 0).sort((a, b) => b - a);
    let evenArray = array.filter((e, i) => e % 2 == 0).sort((a, b) => a - b);
    return array.map((e, i) => e % 2 != 0 ? oddArray.pop() : evenArray.pop());
}

describe("Tests", () => {
    it("test", () => {
        expect(sortArray2([5, 3, 2, 8, 1, 4, 11])).toEqual([1, 3, 8, 4, 5, 2, 11])
        expect(sortArray2([2, 22, 37, 11, 4, 1, 5, 0])).toEqual([22, 4, 1, 5, 2, 11, 37, 0])
        expect(sortArray2([1, 111, 11, 11, 2, 1, 5, 0])).toEqual([1, 1, 5, 11, 2, 11, 111, 0])
        expect(sortArray2([])).toEqual([])
    });
});


function sort<T>(initialArray: T[], sortingArray: number[]): T[] {
    return initialArray.map((e, i) => [sortingArray[i], e]).sort((a, b) => a[0] - b[0]).map(e => e[1]);

}

describe("Tests", () => {
    it("test", () => {
        expect(sort([1, 2, 3, 4, 5], [0, 2, 1, 4, 3])).toEqual([1, 3, 2, 5, 4]);
    });
});


function sortMyString(S  :string) {
    let chars = S.split("");
    return  chars.filter( ( _,i) => i%2 ==0 ).join("")  + " " + chars.filter( ( _,i) => i%2).join("")
    console.log(od)
    return '';
}
// https://www.codewars.com/kata/580755730b5a77650500010c/train/javascript
describe("Other Tests", function(){
    it("Static Ones", function(){
        expect(sortMyString("CodeWars")).toEqual( "CdWr oeas");
        expect(sortMyString("YCOLUE'VREER")).toEqual( "YOU'RE CLEVER");
    });
});

function sortItOut(array : number[]) : number[]{
    // console.log( ...array.filter( ( e) => (e&1) ).sort( (a, b) => a-b))
    // console.log( ...array.filter( ( e) => !(e&1) ).sort( (a, b) => b-a))
    return  [ ...array.filter( ( e) => (e&1) ).sort( (a, b) => a-b) , ...array.filter( ( e) => !(e&1) ).sort( (a, b) => b-a)];
}

describe("Tests", () => {
    it("test", () => {
        expect(sortItOut([11,22,33,44,55,55,90.4,4,78])).toEqual(([11,33,55,55,90.4,78,44,22,4]));
        expect(sortItOut([26,243,52,2,432414,1,11,46,32])).toEqual(([1,11,243,432414,52,46,32,26,2]));
        expect(sortItOut([19,65,88,112,60,14,33,49,88])).toEqual([19,33,49,65,112,88,88,60,14]);
        expect(sortItOut([])).toEqual(([]))
        expect(sortItOut([68,25,99,50,10,67,2,5,8,34,67])).toEqual(([5,25,67,67,99,68,50,34,10,8,2]));
    });
});
