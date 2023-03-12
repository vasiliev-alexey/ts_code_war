export const pigIt = (a : string) : string =>  {

    return a.split(" ").map( w =>  {
        if( w.charCodeAt(0) > 64  && w.substr(-2) != 'ay')  {
            return w.slice(1)+w.slice(0,1)+'ay'
        } else {
            return  w
        }
    }).join(" ");

}


describe("Tests", () => {
    it("test", () => {
        expect(pigIt('Pig latin is cool')).toEqual('igPay atinlay siay oolcay')
        expect(pigIt('This is my string')).toEqual('hisTay siay ymay tringsay')
        expect(pigIt('O emporatay o oresmay !')).toEqual('Oay emporatay oay oresmay !')
        expect(pigIt('. I . JNpxocVZQGhpgay')).toEqual('. Iay . JNpxocVZQGhpgay')
        expect(pigIt('Acta steay abulafay')).toEqual('ctaAay steay abulafay')

    });
});


/* Simple Pig Latin
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/typescript
*/
