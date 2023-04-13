function convertHashToArray(hash){
    let res = []


return [...  Object.entries(hash).sort( ( a , b) => a[0].localeCompare(b[0]))]
}


describe("Basic tests",() =>{
    it('should ', function () {
        expect(convertHashToArray({name: "Jeremy"})).toEqual([["name", "Jeremy"]]);
        expect(convertHashToArray({name: "Jeremy", age: 24})).toEqual([["age", 24], ["name", "Jeremy"]]);
        expect(convertHashToArray({name: "Jeremy", age: 24, role: "Software Engineer"})).toEqual([["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]);
        expect(convertHashToArray({product: "CodeWars", powerLevelOver: 9000})).toEqual([["powerLevelOver", 9000], ["product", "CodeWars"]]);
        expect(convertHashToArray({})).toEqual([]);
    });

});
