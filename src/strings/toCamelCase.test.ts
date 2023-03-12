function toCamelCase(str) : string{

    console.log(str.split(/-|_/).map( (e  , i) => i ==0 ? e : e.charAt(0).toUpperCase() +e.slice(1)).join(""))

    return str.split(/-|_/).map( (e  , i) => i ==0 ? e : e.charAt(0).toUpperCase() +e.slice(1)).join("")
}

describe("Tests", () => {
    it("test", () => {
        expect(toCamelCase('')).toEqual('');
        expect(toCamelCase("the_stealth_warrior")).toEqual("theStealthWarrior");
        expect(toCamelCase("The-Stealth-Warrior")).toEqual("TheStealthWarrior");
        expect(toCamelCase("A-B-C")).toEqual("ABC");
    });
});


export function twiceAsOld(dadYearsOld: number, sonYearsOld: number): number {
    return Math.abs(2 *   sonYearsOld  - dadYearsOld)
}



describe("Basic tests", () => {

    it("Testing for dad's age: 36 and son's age: 7", () => {
       expect(twiceAsOld(36,7)).toEqual( 22);
    });

    it("Testing for dad's age: 55 and son's age: 30", () => {
       expect(twiceAsOld(55,30)).toEqual( 5);
    });

    it("Testing for dad's age: 42 and son's age: 21", () => {
       expect(twiceAsOld(42,21) ).toEqual(0);
    });

    it("Testing for dad's age: 22 and son's age: 1", () => {
       expect(twiceAsOld(22,1)).toEqual( 20);
    });

    it("Testing for dad's age: 29 and son's age: 0", () => {
       expect(twiceAsOld(29,0)).toEqual( 29);
    });
});
