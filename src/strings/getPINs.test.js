
function getPINs(observed) {
    const conc = (agg, b) => {
        const rez = [];
        if (agg.length === 0) {
            rez.push(...b);
        } else {
            for (let s of agg) {
                rez.push(...b.map(c => s + c))
            }
        }
        return rez;
    }


    const variables = new Map();
    variables.set("0", ["0", "8"])
        .set("1", ["1", "2", "4"])
        .set("2", ["1", "2", "3", "5"])
        .set("3", ["2", "3", "6"])
        .set("4", ["1", "4", "5", "7"])
        .set("5", ["2", "4", "5", "6", "8"])
        .set("6", ["3", "5", "6", "9"])
        .set("7", ["4", "7", "8"])
        .set("8", ["5", "7", "8", "9", "0"])
        .set("9", ["6", "8", "9"]);
    let m = observed.split("").map(c => variables.get(c));
    let rez = [];
    for (let mElement of m) {
        rez = conc(rez, mElement)
    }
    return rez.flat()
}


/*
function getPINs(observed) {
  return observed.split('')
  .map( t => ({
		'0': [ '0', '8' ],
    '1': [ '1', '2', '4' ],
    '2': [ '1', '2', '3', '5' ],
    '3': [ '2', '3', '6' ],
    '4': [ '1', '4', '5', '7' ],
    '5': [ '2', '4', '5', '6', '8' ],
    '6': [ '3', '5', '6', '9' ],
    '7': [ '4', '7', '8' ],
    '8': [ '5', '7', '8', '9', '0' ],
    '9': [ '6', '8', '9' ]
  }[t]))
  .reduce((pre, cur)=> [].concat.apply([], pre.map(t => cur.map(g => t + g))));
}
* */


const {assert} = require('chai');


describe('example tests', function () {

    let expectations = {
        "8": ["5", "7", "8", "9", "0"],
        "2": [ '1', '2', '3', '5' ],
        "11": ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
        "369": ["339", "366", "399", "658", "636", "258", "268", "669", "668", "266", "369", "398", "256", "296", "259", "368", "638", "396", "238", "356", "659", "639", "666", "359", "336", "299", "338", "696", "269", "358", "656", "698", "699", "298", "236", "239"]
    };

    for (let pin in expectations) {

        it(`Testing PIN='${pin}'`, () => {
            assert.sameMembers(getPINs(pin), expectations[pin]);
        });
    }
});
// https://www.codewars.com/kata/5263c6999e0f40dee200059d/solutions/javascript
