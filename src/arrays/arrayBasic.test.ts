function getLength(arr) {
    //return length of arr
    return arr.length;
}

function getFirst(arr) {
    //return the first element of arr
    return arr[0]
}

function getLast(arr) {
    //return the last element of arr
    return arr[arr.length - 1]
}

function pushElement(arr) {
    var el = 1;
    //push el to arr
    arr.push(el);
    return arr
}

function popElement(arr) {
    return arr.slice(0, arr.length - 1)
}


describe("Tests", () => {
    it("test", () => {
        expect(getLength([1, 2, 3])).toEqual(3);
        expect(getFirst([1, 2, 3])).toEqual(1);
        expect(getLast([1, 2, 3])).toEqual(3);
        expect(pushElement([1, 2, 3]).length).toEqual(4);
        expect(popElement([1, 2, 3]).length).toEqual(2);
    });
});


function padIt(str, n) {

    let i = 0;
    while (i < n) {
        if (i % 2) {
            str += "*"
        } else {
            str = "*" + str
        }
        i++
    }
    return str
}

describe("Tests", () => {
    it("test", () => {
        expect(padIt("a", 1)).toEqual("*a");
        expect(padIt("a", 2)).toEqual("*a*");
        expect(padIt("a", 3)).toEqual("**a*");
        expect(padIt("a", 4)).toEqual("**a**");
        expect(padIt("a", 5)).toEqual("***a**");
    });
});

function grabDoll(dolls) {
    var bag = [];
    //coding here

    for (const dol of dolls) {
        if (bag.length == 3) {
            break
        }
        if (dol == "Barbie doll" || dol == "Hello Kitty") {
            bag.push(dol);
        } else {
            continue;
        }
    }

    return bag;
}

describe("Tests", () => {
    it("test", () => {
        expect(grabDoll(["Mickey Mouse", "Hello Kitty", "Snow white"])).toEqual(["Hello Kitty"]);
        expect(grabDoll(["Mickey Mouse", "Hello Kitty", "Hello Kitty", "Snow white"])).toEqual(["Hello Kitty", "Hello Kitty"]);
        expect(grabDoll(["Mickey Mouse", "Hello Kitty", "Hello Kitty", "Barbie doll", "Snow white"])).toEqual(["Hello Kitty", "Hello Kitty", "Barbie doll"]);
        expect(grabDoll(["Mickey Mouse", "Barbie doll", "Hello Kitty", "Hello Kitty", "Hello Kitty", "Snow white"])).toEqual(["Barbie doll", "Hello Kitty", "Hello Kitty"]);

    });
});


function giveMeFive(obj: Object) {
    let rez = [];
    //https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript
    //coding here in
    for (const o in obj) {
        if (o.length == 5) {
            rez.push(o)
        }
        if (obj[o] && obj[o].length == 5) {
            rez.push(obj[o])
        }

    }


    return rez;
}

describe("Tests", () => {
    it("test", () => {
        expect(giveMeFive({Our: "earth", is: "a", beautyful: "world"})).toEqual(["earth", "world"]);
        expect(giveMeFive({Ihave: "enough", money: "to", buy: "a", car: "model"})).toEqual(["Ihave", "money", "model"]);
        expect(giveMeFive({Pears: "than", apple: "sweet"})).toEqual(["Pears", "apple", "sweet"]);

    });
});


function whatNumberIsIt(n) {
    let type = n;
    switch (n) {
        case Number.POSITIVE_INFINITY:
            type = "Number.POSITIVE_INFINITY";
            break;
        case Number.MAX_VALUE:
            type = "Number.MAX_VALUE";
            break;
        case Number.MIN_VALUE:
            type = "Number.MIN_VALUE";
            break;
        case Number.NEGATIVE_INFINITY:
            type = "Number.NEGATIVE_INFINITY";
            break;
        case Number.POSITIVE_INFINITY:
            type = "Number.POSITIVE_INFINITY";
            break;
   }

    if ( Object.is( n, NaN)) {
        type = "Number.NaN";
    }
    return `Input number is ${type}`
}

describe("Tests", () => {
    it("test", () => {
        expect(whatNumberIsIt(1 / 0)).toEqual("Input number is Number.POSITIVE_INFINITY");
        expect(whatNumberIsIt(100)).toEqual("Input number is 100");
        expect(whatNumberIsIt(1.7976931348623157e+308)).toEqual("Input number is Number.MAX_VALUE");
        expect(whatNumberIsIt(5e-324)).toEqual("Input number is Number.MIN_VALUE");
        expect(whatNumberIsIt(-Number.MAX_VALUE * 2)).toEqual("Input number is Number.NEGATIVE_INFINITY");
        expect(whatNumberIsIt(NaN)).toEqual("Input number is Number.NaN");
        expect(whatNumberIsIt(Infinity + 1)).toEqual("Input number is Number.POSITIVE_INFINITY");

    });
});


function colorOf(r,g,b){
    return  `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`

}
describe("Tests", () => {
    it("test", () => {
        expect(colorOf(255,0,0)).toEqual( "#ff0000");

        expect(colorOf(0,111,0)).toEqual( "#006f00");

        expect(colorOf(1, 2 ,3)).toEqual( "#010203");

    });
});


function howManySmaller(arr,n){
   return  arr.filter( e => e.toFixed(2)  < n).length


}
describe("Tests", () => {
    it("test", () => {
        expect(howManySmaller([1.234,1.235,1.228],1.24)).toEqual( 2);
        expect(howManySmaller([1.1888,1.1868,1.1838],1.19)).toEqual( 1);
        expect(howManySmaller([3.1288,3.1212,3.1205],3.1212)).toEqual( 2);
    });
});


function cutIt(arr){
     let s = arr.map(e => e.length).reduce( (a ,e ) => a > e ? e : a);
     return   arr.map( e => e.substring( 0 ,s))

}

describe("Tests", () => {
    it("test", () => {
        expect(cutIt(["ab","cde","fgh"]) ).toEqual( ["ab","cd","fg"]);
        expect(cutIt(["abc","defgh","ijklmn"]) ).toEqual( ["abc","def","ijk"]);
        expect(cutIt(["codewars","javascript","java"]) ).toEqual( ["code","java","java"]);

    });
});

function firstToLast(str,c){
  return   str.indexOf(c) == -1 ? -1 :   str.lastIndexOf(c) -  str.indexOf(c)

}

describe("Tests", () => {
    it("test", () => {
        expect(firstToLast("ababc","a")).toEqual( 2);
        expect(firstToLast("ababc","c")).toEqual( 0);
        expect(firstToLast("ababc","d")).toEqual(-1);
    });
});



function splitAndMerge(string, separator) {
    return string.split(" ").map(w => w.split('').join(separator)).join(" ")
}

describe("Tests", () => {
    it("test", () => {
        expect(splitAndMerge("My name is John"," ") ).toEqual( "M y n a m e i s J o h n");
        expect(splitAndMerge("My name is John","-") ).toEqual( "M-y n-a-m-e i-s J-o-h-n");
        expect(splitAndMerge("Hello World!",".") ).toEqual( "H.e.l.l.o W.o.r.l.d.!");
        expect(splitAndMerge("Hello World!",",") ).toEqual( "H,e,l,l,o W,o,r,l,d,!");

    });
});


