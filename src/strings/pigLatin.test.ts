function pigLatin(string : string){
    //your code here
    string = string.toLowerCase();
    let splitStr = string.split("");

    if(splitStr.filter( (w) =>  w.charCodeAt(0) < 65 ).length > 0) {
        return null;
    }

    if( ['a','e','i','o','u'].includes(splitStr[0])) {
        return string.concat('way');
    }
    let index = string.match(/[aeiou]/)?.index??0;
    return string.slice(index) +  string.slice(0, index)+ 'ay'  ;




}

/*
    s = s.lower()
    // if not s.isalpha():
    //     return None
    if not re.search(r'[aeiou]', s):
        return s + 'ay'
    // if re.match(r'[aeiou]', s):
    //     return s + 'way'
    while not re.match(r'[aeiou]', s):
        s = s[1:] + s[0]
    return s + 'ay'
* */


describe("Sample Tests", () => {
    it("Test", () => {
       expect(pigLatin("map")).toEqual("apmay");
        expect(pigLatin("egg")).toEqual("eggway");
        expect(pigLatin("tes3t5")).toEqual(null);
    });
});


/* Single Word Pig Latin
https://www.codewars.com/kata/558878ab7591c911a4000007/train/javascript
Pig Latin is an English language game where the goal is to hide the meaning of a word from people not aware of the rules.
So, the goal of this kata is to wite a function that encodes a single word string to pig latin.
The rules themselves are rather easy:
The word starts with a vowel(a,e,i,o,u) -> return the original string plus "way".
The word starts with a consonant -> move consonants from the beginning of the word to the end of the word until the first vowel, then return it plus "ay".
The result must be lowercase, regardless of the case of the input. If the input string has any non-alpha characters, the function must return None, null, Nothing (depending on the language).
The function must also handle simple random strings and not just English words.
The input string has no vowels -> return the original string plus "ay".
For example, the word "spaghetti" becomes "aghettispay" because the first two letters ("sp") are consonants, so they are moved to the end of the string and "ay" is appended.
*/
