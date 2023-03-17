function count(string) {
    let map = new Map<string, number>();
    string.split('').map(c => map.set(c, (map.get(c) || 0) + 1));
    const obj = {};
    for (const [key, value] of map) {
        obj[key] = value;
    }
    return obj;
}


describe('Sample Tests', function () {
    function test(string, expected) {
        it(`<code>'${string}'</code>`, function () {
            expect(count(string)).toEqual(expected);
        });
    }

    // test('', {});
    test('a', {'a': 1});
    test('ab', {'a': 1, 'b': 1});
    test('aba', {'a': 2, 'b': 1});
    test('ABC', {'A': 1, 'B': 1, 'C': 1});
});


/* Count characters in your string
https://www.codewars.com/kata/52efefcbcdf57161d4000091/solutions/javascript
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
What if the string is empty? Then the result should be empty object literal, {}.

*/
