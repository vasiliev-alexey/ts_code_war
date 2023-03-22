function keywordCipher(string : string, keyword) {

    let al = 'abcdefghijklmnopqrstuvwxyz '.split("").filter( w => !keyword.includes( w));
    const charArray    = [  ...keyword.split("").filter( (c , ind) => keyword.indexOf(c)== ind )  , ...al];
   return string.toLowerCase().split("").map( (c) => c == " "? " " : charArray[ (c.charCodeAt(0)-97)]).join("");

    //your code here
}


describe("Basic tests", () => {
    it("Tests", () => {
        expect(keywordCipher("Welcome home", "secret")).toEqual("wticljt dljt");
        expect(keywordCipher("hello", "wednesday")).toEqual("bshhk");
        expect(keywordCipher("HELLO", "wednesday")).toEqual("bshhk");
        expect(keywordCipher("HeLlO", "wednesday")).toEqual("bshhk");
        expect(keywordCipher("WELCOME HOME", "gridlocked")).toEqual("wlfimhl kmhl");
        expect(keywordCipher("alpha bravo charlie", "delta")).toEqual("djofd eqdvn lfdqjga");
        expect(keywordCipher("Home Base", "seven")).toEqual("dlja esqa");
        expect(keywordCipher("basecamp", "covert")).toEqual("ocprvcil");
        expect(keywordCipher("one two three", "rails")).toEqual("mks twm tdpss");
        expect(keywordCipher("Test", "unbuntu")).toEqual("raqr");
    })
})

/* Keyword Cipher
https://www.codewars.com/kata/57241cafef90082e270012d8/train/javascript
Third day at your new cryptoanalyst job and you come across your toughest assignment yet. Your job is to implement a simple keyword cipher. A keyword cipher is a type of monoalphabetic substitution where two parameters are provided as such (string, keyword). The string is encrypted by taking the keyword, dropping any letters that appear more than once. The rest of the letters of the alphabet that aren't used are then appended to the end of the keyword.

For example, if your string was "hello" and your keyword was "wednesday", your encryption key would be 'wednsaybcfghijklmopqrtuvxz'.

To encrypt 'hello' you'd substitute as follows,

              abcdefghijklmnopqrstuvwxyz
  hello ==>   |||||||||||||||||||||||||| ==> bshhk
              wednsaybcfghijklmopqrtuvxz

hello encrypts into bshhk with the keyword wednesday. This cipher also uses lower case letters only.

Good Luck.

* */
