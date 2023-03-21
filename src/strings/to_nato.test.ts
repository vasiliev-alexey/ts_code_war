function to_nato(words: string) {

    const alph = {
        'a': 'Alfa',
        'b': 'Bravo',
        'c': 'Charlie',
        'd': 'Delta',
        'e': 'Echo',
        'f': 'Foxtrot',
        'g': 'Golf',
        'h': 'Hotel',
        'i': 'India',
        'j': 'Juliett',
        'k': 'Kilo',
        'l': 'Lima',
        'm': 'Mike',
        'n': 'November',
        'o': 'Oscar',
        'p': 'Papa',
        'q': 'Quebec',
        'r': 'Romeo',
        's': 'Sierra',
        't': 'Tango',
        'u': 'Uniform',
        'v': 'Victor',
        'w': 'Whiskey',
        'x': 'Xray',
        'y': 'Yankee',
        'z': 'Zulu'
    }

    return  words.split("").filter(w => w.trim().length > 0).map(c =>  alph[c.toLowerCase()] || c
    ).join(" ")
}


describe("Solution", function () {
    it("Should return a correctly translated string", function () {
        expect(to_nato('If you can read')).toEqual("India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta");
        expect(to_nato('Did not see that coming')).toEqual("Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf");
        expect(to_nato('go for it!')).toEqual("Golf Oscar Foxtrot Oscar Romeo India Tango !");
    });
});


/* If you can read this...
https://www.codewars.com/kata/586538146b56991861000293/train/javascript
Task
You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

Input:

If, you can read?

Output:

India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

Note:

There are preloaded dictionary you can use, named NATO
The set of used punctuation is ,.!?.
Punctuation should be kept in your return string, but spaces should not.
Xray should not have a dash within.
Every word and punctuation mark should be seperated by a space ' '.
There should be no trailing whitespace
* */
