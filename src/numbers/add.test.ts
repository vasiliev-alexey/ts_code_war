function add(a: string, b: string): string {

    if (a == "0" || b == "0") return "0";
    let rez = new Array(a.length + b.length).fill(0);
    let rez_size = rez.length - 1;
    let first = (a.length > b.length ? a : b).split("").map(e => +e);
    let second = ((a.length > b.length ? b.padStart(a.length, '0') : a.padStart(b.length, '0'))).split("").map(e => +e);
    let curIdx = rez_size--;

    for (let i = first.length - 1; i >= 0; i--) {
       let val = first[i] + second[i] + rez[curIdx];
        rez[curIdx] = val % 10;
        rez[--curIdx] += Math.floor(val / 10);
    }
    return rez.join("").replace(/^0+/, '');
}

describe("Add two numbers", function () {
    it("should pass basic tests", function () {
        expect(add("1", "1")).toEqual("2");
        expect(add("123", "456")).toEqual("579");
        expect(add("888", "222")).toEqual("1110");
        expect(add("1372", "69")).toEqual("1441");
        expect(add("12", "456")).toEqual("468");
        expect(add("101", "100")).toEqual("201");
        expect(add('63829983432984289347293874', '90938498237058927340892374089')).toEqual("91002328220491911630239667963")
    });
});
/* https://www.codewars.com/kata/525f4206b73515bffb000b21
Adding Big Numbers
 */
