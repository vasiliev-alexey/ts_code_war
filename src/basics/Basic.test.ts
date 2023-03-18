function alienLanguage(str) {
    //coding here...

    return str.split(" ").map(w => w.slice(0, w.length - 1).toUpperCase().concat(w.slice(-1).toLowerCase())).join(" ")

}


describe("Tests", () => {
    it("test", () => {
        expect(alienLanguage("My name is John")).toEqual("My NAMe Is JOHn");
        expect(alienLanguage("this is an example")).toEqual("THIs Is An EXAMPLe");
        expect(alienLanguage("Hello World")).toEqual("HELLo WORLd");
        expect(alienLanguage("HELLO WORLD")).toEqual("HELLo WORLd");

    });
});


function fiveLine(s: string) {

    return [...Array.from(Array(5).keys())].map(c => s.trim().repeat(c + 1)).join('\n')


}


describe("Tests", () => {
    it("test", () => {
        expect(fiveLine("  a")).toEqual("a\naa\naaa\naaaa\naaaaa");
        expect(fiveLine("\txy \n")).toEqual("xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy");
        expect(fiveLine("           Ok               ")).toEqual("Ok\nOkOk\nOkOkOk\nOkOkOkOk\nOkOkOkOkOk");

    });
});


function shuffleIt(arr, ...ar) {
    for (let arrElement of ar) {
        let first = arr[arrElement[0]];
        arr[arrElement[0]] = arr[arrElement[1]];
        arr[arrElement[1]] = first;
    }
    return arr;

}

describe("Tests", () => {
    it("test", () => {
        expect(shuffleIt([1, 2, 3, 4, 5], [1, 2])).toEqual([1, 3, 2, 4, 5]);
        expect(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4])).toEqual([1, 3, 2, 5, 4]);
        expect(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4], [2, 3])).toEqual([1, 3, 5, 2, 4]);

    });
});

function threeInOne(arr: number[]) {
    //coding here...

    return arr.map(((e, i) => arr.slice(i * 3, i * 3 + 3))).filter(e => e.length).map(e => e.reduce((a, n) => a + n));
    return []
}

describe("Tests", () => {
    it("test", () => {
        expect(threeInOne([1, 2, 3])).toEqual([6]);
        expect(threeInOne([1, 2, 3, 4, 5, 6])).toEqual([6, 15]);
        expect(threeInOne([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([6, 15, 24]);
        var arr1 = [1, 3, 5, 2, 4, 6, 7, 7, 7], copy = arr1.slice();
        expect(threeInOne(arr1)).toEqual([9, 12, 21]);
        expect(arr1).toEqual(copy);

    });
});


function isolateIt(arr: string[]) {
    return arr.map(e => e.slice(0, e.length / 2) + "|" + e.slice(Math.ceil(e.length / 2)))

}

describe("Tests", () => {
    it("test", () => {
        expect(isolateIt(["abcd", "efgh"])).toEqual(["ab|cd", "ef|gh"]);
        expect(isolateIt(["abcde", "fghij"])).toEqual(["ab|de", "fg|ij"]);
        expect(isolateIt(["1234", "56789"])).toEqual(["12|34", "56|89"]);

    });
});


function countGrade(scores) {

    let rez = {S: 0, A: 0, B: 0, C: 0, D: 0, X: 0};
    const toLetter = (n) => {

        if (n == 100) {
            return "S"
        } else if (n >= 90) {
            return "A"
        } else if (n >= 80) {
            return "B"
        } else if (n >= 60) {
            return "C"
        } else if (n >= 0) {
            return "D"
        } else {
            return "X"
        }

    }

    for (let score of scores.filter(e => Number.isInteger(e))) {
        let key = toLetter(score)
        rez[key] = rez[key] + 1;
    }
    return rez

}

describe("Tests", () => {
    it("test", () => {
        // expect(countGrade([50,60,70,80,90,100]) ).toEqual( {S:1, A:1, B:1, C:2, D:1, X:0});
        expect(countGrade([65, 75, , 85, 85, 95, 100, 100])).toEqual({S: 2, A: 1, B: 2, C: 2, D: 0, X: 0});
        expect(countGrade([-1, -1, -1, -1, -1, -1])).toEqual({S: 0, A: 0, B: 0, C: 0, D: 0, X: 6});

    });
});


function mirrorImage(arr: number[]) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toString() == (arr[i + 1] || '').toString().split('').reverse().join('')) {
            return [arr[i], arr[i + 1]]
        }
    }
    return [-1, -1]
}

describe("Tests", () => {
    it("test", () => {
        expect(mirrorImage([11, 22, 33, 33, 22, 11])).toEqual([33, 33]);
        expect(mirrorImage([454, 86, 57, 75, 16, 88])).toEqual([57, 75]);
        expect(mirrorImage([454, 0, 57, 0, 16, 88])).toEqual([-1, -1]);
    });
});


function bigToSmall(arr: number[][]) {
    return arr.reduce((a, e) => [...a, ...e], []).sort((a, b) => b - a).join(">")
    //   return arr.flatMap(x => x).sort(  (a,b) => b - a).join(">")

}

//https://www.codewars.com/kata/5731861d05d14d6f50000626/train/javascript
describe("Tests", () => {
    it("test", () => {
        expect(bigToSmall([[1, 2], [3, 4], [5, 6]])).toEqual("6>5>4>3>2>1");
        expect(bigToSmall([[1, 3, 5], [2, 4, 6]])).toEqual("6>5>4>3>2>1");
        expect(bigToSmall([[1, 1], [1], [1, 1]])).toEqual("1>1>1>1>1");
    });
});

function tailAndHead(arr: number[]) {
    //coding here...
    let rez = []
    for (let i = 1; i < arr.length; i++) {
        rez.push(arr[i - 1] % 10 + +arr[i].toString().slice(0, 1))
    }
    return rez.reduce((a, e) => a * e, 1);
}


describe("Tests", () => {
    it("test", () => {
        expect(tailAndHead([123, 456, 789, 12, 34, 56, 78])).toEqual(532350);
        expect(tailAndHead([1, 2, 3, 4, 5])).toEqual(945);
        expect(tailAndHead([111, 2345, 66, 78, 900])).toEqual(7293);
        expect(tailAndHead([35456, 782, 569, 2454, 875])).toEqual(12012);

    });
});


function blackAndWhite(arr): "It's a fake array" | "It's a black array" | "It's a white array" {
    //coding here...
    if (!Array.isArray(arr)) {
        return "It's a fake array";
    } else if ((arr.indexOf(5) == -1 || arr.indexOf(13)) == -1) {
        return "It's a white array";
    } else {
        return "It's a black array";
    }


}

describe("Tests", () => {
    it("test", () => {
        expect(blackAndWhite(5, 13)).toEqual("It's a fake array");
        expect(blackAndWhite([5, 13])).toEqual("It's a black array");
        expect(blackAndWhite([5, 12])).toEqual("It's a white array");

    });
});

function roundIt(n) {
    let str = n.toString().split(".");

    if (str[0].length < str[1].length) {
        return Math.ceil(n)
    } else if (str[0].length > str[1].length) {
        return Math.floor(n)
    } else {
        return Math.round(n)
    }

}

describe("Tests", () => {
    it("test", () => {
        expect(roundIt(3.45)).toEqual(4);
        expect(roundIt(34.5)).toEqual(34);
        expect(roundIt(34.56)).toEqual(35);
    });
});


function maxMin(arr1: number[], arr2: number[]) {
    let tmp = arr2.map((a, i) => Math.abs(arr1[i] - a)).sort((a, b) => a - b);

    return [tmp[tmp.length - 1], tmp[0]]


}

describe("Tests", () => {
    it("test", () => {
        expect(maxMin([1, 3, 5], [9, 8, 7])).toEqual([8, 2]);
        expect(maxMin([1, 10, 100, 1000], [0, 0, 0, 0])).toEqual([1000, 1]);
        expect(maxMin([10, 20, 30, 40], [111, 11, 1, -111])).toEqual([151, 9]);

    });
});


function rndCode(): string {
let rez = "";

    for (let i = 0; i < 8 ; i++) {
        if (i < 2) {
            const rnd = Math.ceil(Math.random() * 12);
           // console.log(rnd)
            rez += "ABCDEFGHIJKLM".charAt(rnd)
        }else if (i > 5) {
            const rnd = Math.ceil(Math.random() * 8);
            console.log(rnd)
            rez += "~!@#$%^&*".charAt(Math.ceil(rnd));
        } else  {
            rez += i
        }
    }
    return  rez

}

describe("Tests", () => {
    for (let i = 0; i < 100 ; i++) {
        it("test", () => {
            const yourcode = rndCode();
            console.log("Your Code:", yourcode);
            expect(typeof yourcode).toEqual( "string");
            expect(yourcode.length).toEqual(8);
            expect("ABCDEFGHIJKLM".indexOf(yourcode[0]) > -1,).toEqual(true);//,"1st char should generate from A-M");
            expect("ABCDEFGHIJKLM".indexOf(yourcode[1]) > -1).toEqual(true);//,"2nd char should generate from A-M");
            expect(/^\d{4}$/.test(yourcode.slice(2, -2))).toEqual(true);//,"3th-6th char should be numbers");
            expect("~!@#$%^&*".indexOf(yourcode[6]) > -1).toEqual(true);//,"7th char should generate from ~!@#$%^&*");
            expect("~!@#$%^&*".indexOf(yourcode[7]) > -1).toEqual(true);//,"8th char should generate from ~!@#$%^&*");

        });
    }


});



function countAnimals(animals : string ,count : string[]){
    return count.map( arr => (animals.match(new RegExp(arr  , "g")) || []).length  || 0  );


}

describe("Tests11", () => {
    it("test111", () => {
       expect(countAnimals("dog,cat",["dog","cat"]) ).toEqual( [1,1]);
    expect(countAnimals("dog,cat",["dog","cat","pig"]) ).toEqual( [1,1,0]);
       expect(countAnimals("dog,dog,cat",["dog","cat"]) ).toEqual( [2,1]);
       expect(countAnimals("dog,dog,cat",["pig","cow"]) ).toEqual( [0,0]);

    });
});


