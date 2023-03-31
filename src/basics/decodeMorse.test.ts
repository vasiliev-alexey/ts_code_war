const MORSE_CODE = {
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    "/": " ",
    "-.-.--": "!",
    ".-.-.-": ".",
    "--..--": ","
};


function decodeMorse(morseCode: string): string {
    // your code here

   let words =  morseCode.split("   ").map(e => e.trim().split(" "));
    return  words.map( w => w.map( c => MORSE_CODE[c]).join("")).join(" ");

}


import {assert} from 'chai';

const Test = {
    expect: (...args: any[]) => (assert as any)(...args),
    assertEquals: (...args: any[]) => (assert as any).equal(...args),
};

describe("Example from description", function () {
    it('HEY JUDE', () => {
        Test.assertEquals(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE')
    });
});

describe("Your own tests", function () {
    it('Something', () => {
        // your tests
    });
});


