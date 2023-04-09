function charToAscii(string : string){

    let t = {};
  let chars =   string.split("").filter( c =>  c.match(/\w/ig));
    chars.map( c => {
        t[c] =  c.charCodeAt(0)


    }   )
   return string.length ==0? null :  t

    //your code here
}
describe("Tests", () => {
    it("test", () => {
       // expect(charToAscii("")).toEqual( null,"deals with an empty str");
      //  expect(charToAscii("a")).toEqual( {"a":97},"deals with one char");
        //expect(charToAscii("aaa")).toEqual( {"a":97},"deals with repeated characters");
        expect(charToAscii("hello world")).toEqual( {"h":104, "e":101, "l":108, "o":111, "w":119, "r":114, "d":100},"deals with spaces");
        expect(charToAscii("ABaa ^")).toEqual( {"A":65, "B":66, "a":97},"deals with uppercase characters and non alphebetic characters");
    });
});
