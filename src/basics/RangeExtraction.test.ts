function solution(list) {

    let rez = [];
    let tmp = [list[0]];

    for (let i = 1; i < list.length; i++) {
        if (list[i] - list[i - 1] > 1) {
            rez.push(tmp);
            tmp = [];
            tmp.push(list[i]);
        } else {
            tmp.push(list[i])
        }
    }
    rez.push(tmp);

    let rez2 = [];
    rez.map(t => {
        let [minBound, maxBound] = [Math.min(...t), Math.max(...t)];
        if (t.length == 2) {
            rez2.push([minBound], [maxBound])
        } else if (t.length > 2) {
            rez2.push([minBound, maxBound])
        } else {
            rez2.push([minBound]);
        }
    })
    return rez2.map(e => e.join("-")).join(",")
}

/*

* */


describe("Sample Tests", () => {
    it("Should pass sample tests", () => {
        expect(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])).toEqual("-6,-3-1,3-5,7-11,14,15,17-20")
    });
});

// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript
