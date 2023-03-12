function multiply(a: string, b: string): string {

    if (a == "0" || b == "0") return "0";
    let rez = new Array(a.length + b.length).fill(0);
    let rez_size = rez.length - 1;
    let first = (a.length > b.length ? a : b).split("").map(e => +e);
    let second = ((a.length > b.length ? b : a)).split("").map(e => +e);

    for (let i = first.length - 1; i >= 0; i--) {
        let curIdx = rez_size--;
        for (let j = second.length - 1; j >= 0; j--) {
            let val = first[i] * second[j] + rez[curIdx];
            rez[curIdx] = val % 10;
            rez[--curIdx] += Math.floor(val / 10);
        }
    }
    return rez.join("").replace(/^0+/, '');
}

//https://skysmart.ru/articles/mathematic/umnozhenie-v-stolbik
describe('Some simple multiplications', function () {
    it('simple', function () {
        expect(multiply("2", "3")).toEqual("6");
        expect(multiply("30", "9")).toEqual("270");
        expect(multiply("18", "1")).toEqual("18");
        expect(multiply("30", "69")).toEqual("2070");
        // expect(multiply("11", "85")).toEqual( "935");
    });
});

describe('Some corner case', function () {
    it('corner cases', function () {
        expect(multiply("2", "0")).toEqual("0");
        expect(multiply("0", "30")).toEqual("0");
        expect(multiply("0000001", "3")).toEqual("3");
        expect(multiply("1009", "03")).toEqual("3027");
    });
});
//
describe('Some big multiplications', function () {
    it('big boys', function () {
        expect(multiply("98765", "56894")).toEqual("5619135910");
        expect(multiply("1020303004875647366210", "2774537626200857473632627613")).toEqual("2830869077153280552556547081187254342445169156730");
        expect(multiply("58608473622772837728372827", "7586374672263726736374")).toEqual("444625839871840560024489175424316205566214109298");
        expect(multiply("9007199254740991", "9007199254740991")).toEqual("81129638414606663681390495662081");
    });
});

/* Multiplying numbers as strings
https://www.codewars.com/kata/55911ef14065454c75000062/train/javascript
This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!

The arguments are passed as strings.
The numbers may be way very large
Answer should be returned as a string
The returned "number" should not start with zeros e.g. 0123 is invalid
Note: 100 randomly generated tests!
 */
