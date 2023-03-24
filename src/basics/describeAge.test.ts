// TODO: Refactor and shorten the function

function describeAge(age) {

    return `You're a(n) ${age <= 12 ? "kid" : age <= 17 ? "teenager" : age <= 64 ? "adult" : "elderly"}`


}

// https://www.codewars.com/kata/56f3f6a82010832b02000f38/train/javascript
describe("Your refactored solution", () => {
    it("should still exhibit the exact same behaviour as the function prior to refactoring", () => {
        expect(describeAge(9)).toEqual("You're a(n) kid");
        expect(describeAge(10)).toEqual("You're a(n) kid");
        expect(describeAge(11)).toEqual("You're a(n) kid");
        expect(describeAge(12)).toEqual("You're a(n) kid");
        expect(describeAge(13)).toEqual("You're a(n) teenager");
        expect(describeAge(14)).toEqual("You're a(n) teenager");
        expect(describeAge(15)).toEqual("You're a(n) teenager");
        expect(describeAge(16)).toEqual("You're a(n) teenager");
        expect(describeAge(17)).toEqual("You're a(n) teenager");
        expect(describeAge(18)).toEqual("You're a(n) adult");
        expect(describeAge(19)).toEqual("You're a(n) adult");
        expect(describeAge(63)).toEqual("You're a(n) adult");
        expect(describeAge(64)).toEqual("You're a(n) adult");
        expect(describeAge(65)).toEqual("You're a(n) elderly");
        expect(describeAge(66)).toEqual("You're a(n) elderly");
        expect(describeAge(100)).toEqual("You're a(n) elderly");
    });
});


const find = <T>(a: T[], element: T): string | number => a.indexOf(element) >= 0 ? a.indexOf(element) : "Not found";


describe("Your refactored find() function", () => {
    it("should behave as expected", () => {
        var array = [2, 3, 5, 7, 11];
        expect(find(array, 5)).toEqual(2);
        expect(find(array, 11)).toEqual(4);
        expect(find(array, 3)).toEqual(1);
        expect(find(array, 2)).toEqual(0);
        expect(find(array, 7)).toEqual(3);
        expect(find(array, 1)).toEqual("Not found");
        expect(find(array, 8)).toEqual("Not found");
        array = [true, "Hello World", false, "Lorem Ipsum", 6, Math.PI];
        expect(find(array, "Hello World")).toEqual(1);
        expect(find(array, "lorem ipsum")).toEqual("Not found");
        expect(find(array, "Lorem Ipsum")).toEqual(3);
        expect(find(array, false)).toEqual(2);
        expect(find(array, true)).toEqual(0);
        expect(find(array, Math.PI)).toEqual(5);
        expect(find(array, 3.14)).toEqual("Not found");
        expect(find(array, 6)).toEqual(4);
    });
});

// function common(a:number[],b: number[],c:number[]){
//   return   a.filter( (e) =>  b.indexOf(e) !== -1 &&  c.indexOf(e) != -1).reduce( (a,r)=> a+r, 0)
//
// }

const common = (a, b, c) => {
    const getCount = (arr) =>
        arr.reduce((acc, curr) => {
            if (!acc[curr]) acc[curr] = 0;
            acc[curr] += 1;

            return acc;
        }, {});

    const [b1, c1] = [b, c].map((el) => getCount(el));

    return a
        .map((num) => {
            if (b1[num] && c1[num]) {
                b1[num] -= 1;
                c1[num] -= 1;

                return num;
            }

            return 0;
        })
        .reduce((acc, curr) => acc + curr, 0);
};

describe("Basic tests", function () {
    it('should ', function () {
        expect(common([1, 2, 3], [5, 3, 2], [7, 3, 2])).toEqual(5);
        expect(common([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2])).toEqual(7);
    });

});


Array.prototype.except = function (keys) {
    return Array.isArray(keys) ? this.filter((e, i) => keys.every(v => v != i)) : this.filter((e, i) => i != keys);

}

describe("Tests", () => {
    it("test", () => {
        var array = ['a', 'b', 'c', 'd', 'e'];

        expect(array.except([1, 3])).toEqual(['a', 'c', 'e']);
        expect(array.except(1)).toEqual(['a', 'c', 'd', 'e']);
        expect(array.except(0)).toEqual(['b', 'c', 'd', 'e']);

    });
});


Array.prototype.only = function (keys) {
    return Array.isArray(keys) ? this.filter((e, i) => keys.some(v => v == i)) : this.filter((e, i) => i == keys);
}


describe('Basic functionality.',   ()  => {
it('should ', function () {
    var array = ['a', 'b', 'c', 'd', 'e'];

    expect(array.only([0, 3])).toEqual(['a', 'd']);
   expect(array.only([1])).toEqual(['b']);
    expect(array.only([0, 1, 3, 4])).toEqual(['a', 'b', 'd', 'e']);
});


})
;

describe('Should preserve the order of the elements in the source array.', function () {

    it('should ', function () {
        var array = ['a', 'b', 'c', 'a', 'b'];

        expect(array.only([0, 1, 3])).toEqual(['a', 'b', 'a']);
        expect(array.only([1, 2, 3, 4])).toEqual(['b', 'c', 'a', 'b']);
    });


});
