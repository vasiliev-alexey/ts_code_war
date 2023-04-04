function simple_assembler(program) {

    let memStack = new Map();

    let i = 0;
    l: while (   i <  program.length ){

        const [command, register, value] = program[i].split(' ');
         console.log( "***", program[i] ,  "***" , memStack)

        switch (command) {
            case "mov": {
                const numVar = Number(value);
                memStack.set(register, numVar === numVar ?  Number(value) : memStack.get(value));
                break;
            }
            case "inc": {
                memStack.set(register, Number(+memStack.get(register) + 1));
                break;
            }
            case "dec": {
                memStack.set(register, +memStack.get(register) - 1);
                break;
            }

            case "jnz": {
                if (memStack.get(register) == 0)  {
                    break;
                };
                i += Number(value) ;
                continue l;
            }

        }
        i++;
    }
    return Object.fromEntries(memStack);
}


const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
    it("test", () => {
        assert.deepEqual(
            simple_assembler(['mov a 5', 'inc a', 'dec a', 'dec a', 'jnz a -1', 'inc a']),
            {'a': 1}
        );

        assert.deepEqual(
            simple_assembler(['mov a -10', 'mov b a', 'inc a', 'dec b', 'jnz a -2']),
            {'a': 0, 'b': -20}
        );
        assert.deepEqual(
            simple_assembler([
                'mov h 36', 'mov s 0',
                'jnz s 2',  'jnz h 3',
                'dec h',    'inc s',
                'dec h',    'inc h',
                'dec s',    'inc s',
                'inc s',    'inc s'
            ]),
            { h: 36, s: 2 }
        );




    });
});
//https://www.codewars.com/kata/58e24788e24ddee28e000053/train/javascript


function vaporcode(string) {
    return string.toUpperCase().replaceAll(" " , '').split("").join("  ")
}


describe("V  A  P  O  R  C  O  D  E", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(vaporcode("Lets go to the movies"),"L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S");
        assert.strictEqual(vaporcode("Why isnt my code working"),"W  H  Y  I  S  N  T  M  Y  C  O  D  E  W  O  R  K  I  N  G");
    });

});


function capitalizeWord(word) {

    return   word[0].toUpperCase()  + word.slice(1);
}

describe("Tests1", () => {
    it("test", () => {
        expect(capitalizeWord('word')).toEqual( 'Word');
        expect(capitalizeWord('i')).toEqual( 'I');
        expect(capitalizeWord('glasswear')).toEqual( 'Glasswear');
    });
});

const capitals = function (word: string) : [] {

    return word.split("").map( (c, i) =>  c == c.toUpperCase() ? i: -1).filter( v => v > -1)

};


describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.deepEqual(capitals('CodEWaRs'), [0,3,4,6] );
    });
});


function capitalsFirst(str){

    return str.split(" ").filter(w => w[0] == w[0].toUpperCase()).join(" ") +  " " +  str.split(" ").filter(w => w[0] != w[0].toUpperCase()).join(" ")
}
describe("Testsww", () => {
    it("test", () => {
       expect(capitalsFirst("hey You, Sort me Already!")).toEqual( "You, Sort Already! hey me")
    });
});


export function order(words:string):string{
 return  words.split(" ").sort( (a , b) => +a.replaceAll(/\D+/g, '') >  +b.replaceAll(/\D+/g, '')? 1: -1 ).join(" ");

}

describe("solution", function(){
    it("basicTests", function(){
        assert.equal(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
        assert.equal(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople");
        assert.equal(order(""), "");
    });
});


function sort(str: string) {
    const code =
        "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789!?’'()*+,.…:\"@#$%&^-;<=>[]_{}~“”£ ";
    return  [...str].sort((a, b) =>  a.toLowerCase().charCodeAt(0) == b.toLowerCase().charCodeAt(0)?
        a.charCodeAt(0) - b.charCodeAt(0):

        a.toLowerCase().charCodeAt(0) - b.toLowerCase().charCodeAt(0) )
        .join("")
        .trim();
}
describe("Tesqqts", () => {
    it("teqqst", () => {
       expect( sort('The cat sat on the mat')).toEqual( 'aaaceehhmnosTtttt');
       expect( sort('“Happy 21st Birthday!”')).toEqual( 'aaBdHhipprsttyy12!“”');
       expect( sort('I often see the time 11:11 or 12:34 on clocks.')).toEqual( 'cceeeeefhIiklmnnoooorssttt11111234.::');
    });
});



function alphabetized(s : string) {
    const code =
        "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789!?’'()*+,.…:\"@#$%&^-;<=>[]_{}~“”£ ";
    return  [...s].filter( c => c.match(/[a-zA-Z]+/g) ).sort((a, b) =>  a.toLowerCase().charCodeAt(0) == b.toLowerCase().charCodeAt(0)?
        0:

        a.toLowerCase().charCodeAt(0) - b.toLowerCase().charCodeAt(0) )
        .join("")
        .trim();
}

describe('wellSorted(s)', function() {
    it('should handle "the good book"', function() {
       expect(alphabetized('Th#e Holy Bible')).toEqual('BbeehHilloTy')
    })
})



