function deepCount(a: any[]): number {
    let rez = 0;
    a.forEach(item => {
        if (Array.isArray(item)) {
            rez += deepCount(item);
        }
        rez++;

    });
    return rez;
}


describe("Sample Tests", () => {
    it("Should pass sample tests", () => {
        expect(deepCount([])).toEqual(0);
        expect(deepCount([1, 2, 3])).toEqual(3);
        expect(deepCount(["x", "y", ["z"]])).toEqual(4);
        expect(deepCount([1, 2, [3, 4, [5]]])).toEqual(7);
        expect(deepCount([[[[[[[[[]]]]]]]]])).toEqual(8);
    });
});



export class Challenge {
    static solution(number: number) {
        let arr = []
        // loop from 1 to number
        for(let i = 1; i < number; i++) {
            if(i % 3 == 0 || i % 5 == 0) arr.push(i)
        }
        return arr.reduce((acc, c) => acc + c, 0)
    }
}


var FilterNumbers = function(str) {
    return str.split('').filter(c =>  {

        return Object.is(parseInt(c), NaN)
    }).join('');
}


describe('Fixed Tests', () => {

    it('should ', function () {
        expect(FilterNumbers("bfceeceacfad0ddabdcd")).toEqual( 'bfceeceacfadddabdcd');
    });



});

