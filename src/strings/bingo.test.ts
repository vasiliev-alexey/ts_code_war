function bingo(ticket :  [ [string , number]], win : number) : 'Loser!'|'Winner!' {





    return  ticket.map( ( t) => t[0].split('').filter( f => f.charCodeAt(0) == t[1]) ).filter( e => e.length == 1).length >= win ? 'Winner!':  "Loser!"

}

const assert = require('chai').assert

describe("Tests",()=>{
    it('Fixed tests', ()=>{
        assert.strictEqual(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2), 'Loser!');

        assert.strictEqual(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1), 'Winner!');
         assert.strictEqual(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3), 'Loser!');
    });
});


/*
Time to win the lottery!
Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

Example ticket:
[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.
Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.
All inputs will be in the correct format. Strings on tickets are not always the same length.


https://www.codewars.com/kata/57f625992f4d53c24200070e/train/javascript
*/
