function encode(plaintext: string){
    return plaintext.toLowerCase().split(" ").map( v => v.split("").map( c =>  !(/^[a-z]/g).test(c)? c :  c.charCodeAt(0)%2 ? 0: 1).join("")).join( " ")
}


describe("Tests", () => {
    it("test", () => {
//Most basic test
       expect(encode("Hello World!")).toEqual("10110 00111!")
    });
});
