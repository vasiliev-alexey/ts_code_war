function toWeirdCase(string : string){
    //TODO

    return string.split(" ").map( (c) =>  c.split('').map(  (c , i) => i%2 ? c.toLowerCase(): c.toUpperCase()).join('')).join(" ");

}



describe('toWeirdCase', function(){
    it('should return the correct value for a single word', function(){
      expect(toWeirdCase('This')).toEqual('ThIs');
        expect(toWeirdCase('is')).toEqual('Is');
    });
    it('should return the correct value for multiple words', function(){
        expect(toWeirdCase('This is a test')).toEqual( 'ThIs Is A TeSt');
    });
});


/* eIrD StRiNg CaSe
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
Examples:

toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"



https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript
*/
