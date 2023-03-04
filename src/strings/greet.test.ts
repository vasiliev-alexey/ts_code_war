const greet = function(name :string) {
 return  `Hello ${name.substr(0,1).toUpperCase()}${name.substr(1).toLowerCase()}!`
};

describe("Tests", () => {
    it("test", () => {

        expect(greet('riley')).toEqual( 'Hello Riley!');
    });
});
