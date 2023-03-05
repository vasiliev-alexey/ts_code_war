function stringMerge(string1 : string, string2 :string, letter:string) : string{

    return  string1.substr(0, string1.indexOf(letter)).concat( string2.substr(string2.indexOf(letter)))


}


describe( "String Merge Tests:", () => {
test( "test"  , () => {
    expect(stringMerge("person","here", "e")).toEqual( "pere");
    expect(stringMerge("apowiejfoiajsf","iwahfeijouh", "j")).toEqual( "apowiejouh");
    expect(stringMerge("abcdefxxxyzz","abcxxxyyyxyzz", "x")).toEqual( "abcdefxxxyyyxyzz");
    expect(stringMerge("12345654321","123456789", "6")).toEqual( "123456789");
    expect(stringMerge("JiOdIdA4","oopopopoodddasdfdfsd", "d")).toEqual("JiOdddasdfdfsd");
    expect(stringMerge("incredible","people", "e")).toEqual( "increople");
})


} );


/* String Merge!
Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.

Examples
("hello", "world", "l")       ==>  "held"
("coding", "anywhere", "n")   ==>  "codinywhere"
("jason", "samson", "s")      ==>  "jasamson"
("wonderful", "people", "e")  ==>  "wondeople"

https://www.codewars.com/kata/597bb84522bc93b71e00007e/train/javascript
* */
