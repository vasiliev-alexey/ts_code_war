Object.defineProperty( Array.prototype, "containsAll", { value: function containsAll(a) {
        return  a.every( e => this.includes(e)) ;
    } } );


const {assert,config} = require("chai"); config.truncateThreshold = 0;

it("example tests",()=>{
    assert.strictEqual( [1,2,3,4,5,6,7,8,9,10,11,12,13].containsAll([1,2,3,4,5]), true );
    assert.strictEqual( [1,2,3,4,5,6,7,8,9,10,11,12,13].containsAll([9,2,5,4,10]), true );
    assert.strictEqual( [1,2,3,4,5,6,7,8,9,10,11,12,13].containsAll([12,15]), false );
    assert.strictEqual( [1,2,3,4,5,6,7,8,9,10,11,12,13].containsAll([]), true );
    assert.strictEqual( [].containsAll([12,15]), false );
    assert.strictEqual( [].containsAll([]), true );
});


  function createPhoneNumber(numbers: number[]): string {
    return `(${numbers.slice(0,3).join("")}) ${numbers.slice(3,6).join("")}-${numbers.slice(6).join("")}`
}




describe('Tests', () => {
    it('Should pass sample tests', () => {
        assert.equal(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
        assert.equal(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
        assert.equal(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
    });
});


const arrCheck = (value : any[]) : boolean => {
    return value.every( v=> Array.isArray(v));
}

    describe("Fixed Tests", () => {
        it("Tests to see if your function returns the correct values.", () => {
            assert.strictEqual(arrCheck([]), true);
            assert.strictEqual(arrCheck([['string']]), true);
            assert.strictEqual(arrCheck([[],{}]), false);
            assert.strictEqual(arrCheck([[1],[2],[3]]), true);
            assert.strictEqual(arrCheck(['A', 'R', 'R', 'A', 'Y']), false);
        });
    });


Object.defineProperty(Array.prototype, 'insert', {
    value: function(index, element) {
        return this.splice(index, 0, element), this;
    },
    enumerable: false
});



describe("Simple inserts", function(){
    var tests = [
        [[1,2,3],0,0, [0,1,2,3]],
        [['1',2,4],1,'s', ['1','s',2,4]],
        [[true,true,true],2,false,[true,true,false,true]]
    ];

    tests.forEach(a=>{
        it("Should insert as intended", () => {
            expect(a[0].insert(a[1],a[2])).to.eql(a[3]);
        });
    });
});

describe("Other inserts", function(){
    it("Should work for other fixed tests", () => {

        var tests = [
            [[1,2,3],10,0, [1,2,3,0]],
            [[1,2,4],3,1, [1,2,4,1]],
            [[0,0,0],10,2,[0,0,0,2]]
        ];

        tests.forEach(a=>{
            expect(a[0].insert(a[1],a[2])).to.eql(a[3]);
        });

        var arr = [0];
        expect(function(){
            arr.insert(0,0).insert(10,2).insert(0,10)
        }).not.to.throw();
        expect(arr).to.eql([10,0,0,2]);
    });
});
