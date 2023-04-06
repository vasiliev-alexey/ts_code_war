function gridMap(fn,a) {
    return  a.map (  b => b.map(v => fn(v)));
}


const {assert,config} = require("chai"); config.truncateThreshold = 0;

it("example tests",()=>{
    const numberGrid = [ [1,2,3,4]
        , [5,6,7,8,9]
        , [0,2,4]
    ];
    assert.deepEqual( gridMap( x => x+1 , numberGrid ), [[2,3,4,5],[6,7,8,9,10],[1,3,5]], "for x => x+1, [[1,2,3,4],[5,6,7,8,9],[0,2,4]]" );
    assert.deepEqual( gridMap( x => x*2 , numberGrid ), [[2,4,6,8],[10,12,14,16,18],[0,4,8]], "for x => x*2, [[1,2,3,4],[5,6,7,8,9],[0,2,4]]" );
    assert.deepEqual( gridMap( x => x**2 , numberGrid ), [[1,4,9,16],[25,36,49,64,81],[0,4,16]], "for x => x**2, [[1,2,3,4],[5,6,7,8,9],[0,2,4]]" );
    const charGrid = [ ['H','e','l','l','o']
        , ['W','o','r','l','d','!']
    ];
    assert.deepEqual( gridMap( x => x.toUpperCase() , charGrid ), [['H','E','L','L','O'],['W','O','R','L','D','!']], "for x => x.toUpperCase(), [ ['H','e','l','l','o'], ['W','o','r','l','d','!'] ]" );
    assert.deepEqual( gridMap( x => x.toLowerCase() , charGrid ), [['h','e','l','l','o'],['w','o','r','l','d','!']], "for x => x.toLowerCase(), [ ['H','e','l','l','o'], ['W','o','r','l','d','!'] ]" );
});


function findTheNumberPlate(customerID){
    const leftCount = Math.floor(customerID / 999)
    const rightCount = customerID % 999

    const leftPart = (() => {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz'
        const counters = [
            leftCount % alphabet.length,
            Math.floor(leftCount / alphabet.length) % alphabet.length,
            Math.floor(leftCount / alphabet.length ** 2) % alphabet.length,
        ]

        return counters.map(idx => alphabet[idx]).join('')
    })()

    const rightPart = String(rightCount + 1).padStart(3, '0')


    return leftPart + rightPart
}
