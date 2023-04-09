function hamsterMe(code: string, message:string) {


    let codes = code.split("").filter( (c, i , a) => a.lastIndexOf(c) == i).sort();
    let  numPos = 1;
    let codeChar = codes[code.length-1];

    let mapAl:Map<string , string> = new Map();
    let shiftInd =codes[0].toUpperCase().charCodeAt(0)-65;
    let alp =   Array.from(Array(26), ( _ ,  i) =>  String.fromCharCode(i+65).toLowerCase() );
    alp.push(...alp);

    for ( let i = shiftInd;  i < (26 + shiftInd); i++) {
        if (codes.includes(alp[i])) {
            numPos = 1;
            codeChar = alp[i];
        }
        mapAl.set(alp[i], `${codeChar}${numPos}`)
        numPos++;
    }

    return message.split("").map( c=> mapAl.get(c) ).join("")

}
// https://www.codewars.com/kata/595ddfe2fc339d8a7d000089/train/javascript
describe("Tests", () => {
    it("test", () => {

       expect(hamsterMe("hamster", "hamster") ).toEqual( "h1a1m1s1t1e1r1" );
       expect(hamsterMe("hhhhammmstteree", "hamster") ).toEqual( "h1a1m1s1t1e1r1", "Duplication of letters in code?" );
       expect(hamsterMe("hamster", "helpme") ).toEqual( "h1e1h5m4m1e1" );
        expect(hamsterMe("hmster", "hamster") ).toEqual( "h1t8m1s1t1e1r1", "Lack of letter in the code?");
        expect(hamsterMe("hhhhammmstteree", "hamster") ).toEqual( "h1a1m1s1t1e1r1", "Duplication of letters in code?" );
        expect(hamsterMe("hamster", "abcdefghijklmnopqrstuvwxyz") ).toEqual( "a1a2a3a4e1e2e3h1h2h3h4h5m1m2m3m4m5r1s1t1t2t3t4t5t6t7" );
        expect(hamsterMe("f", "abcdefghijklmnopqrstuvwxyz") ).toEqual( "f22f23f24f25f26f1f2f3f4f5f6f7f8f9f10f11f12f13f14f15f16f17f18f19f20f21", "One letter code ?");
    });
});
