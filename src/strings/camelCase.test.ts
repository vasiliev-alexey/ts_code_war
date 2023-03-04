export function camelCase(str: string): string {
    return str.toLowerCase().split(" ").map( w => `${w.substr(0, 1).toUpperCase()}${w.substr(1)}`).join(''); // your code here
}


describe("Sample Test Cases", function(){
    it("Should return a CamelCased string", function() {
      expect( camelCase("")).toEqual( "");
        expect( camelCase("test case")).toEqual( "TestCase");
        expect(camelCase("camel case method")).toEqual( "CamelCaseMethod");
        expect(camelCase("say hello")).toEqual( "SayHello");
        expect(camelCase("camel case word")).toEqual( "CamelCaseWord");
    });
});


/* CamelCase Method
Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

camelCase("hello case"); // => "HelloCase"
camelCase("camel case word"); // => "CamelCaseWord"
Don't forget to rate this kata! Thanks :)


* */
