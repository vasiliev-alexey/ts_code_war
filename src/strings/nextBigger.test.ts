export function nextBigger(n: number): number {

    let digits = n.toString().split("").map(d => +d);
    let sorted = digits.map(e => e).sort((a, b) => b - a);

    if (digits.every((e, i) => e == sorted[i])) {
        return -1;
    }
    for (let i = digits.length - 1; i > 0; i--) {

        if (digits[i] > digits[i - 1]) {
            let numOrd = digits[i - 1];
            let digs = digits.slice(i);
            let nextMax = digs.filter(e => e > numOrd).sort((a, b) => a - b)[0];
            console.log(nextMax)

            digs[digs.indexOf(nextMax)] = numOrd;
            return +(digits.splice(0, i - 1).join('') + nextMax + digs.sort().join(''));
        }
    }
    return 0;
}


/*
1. Начиная с последней цифры заданного числа, найдите первую цифру, которая нарушает порядок сортировки. Пусть индекс этой найденной цифры равен 'i', а цифра - числу [i].
2. Найдите следующую большую цифру в правой части числа [i] - то есть от цифры с индексом i+1 до последней цифры. Пусть эта цифра будет числом [j] с индексом 'j'.
3. Поменяйте местами цифры в индексах "i" и "j".
4. Отсортируйте число от индекса i+1 до конечного индекса. Поскольку эта часть будет отсортирована в обратном порядке, все, что нам нужно сделать, это перевернуть эту часть, что займет O (n) времени.
*/


import {assert} from "chai";


describe("Basic tests", () => {
    it("Small numbers", () => {

        // assert.strictEqual(nextBigger(12), 21);
        // assert.strictEqual(nextBigger(513), 531);
        assert.strictEqual(nextBigger(2017), 2071);
        // assert.strictEqual(nextBigger(414), 441);
        // assert.strictEqual(nextBigger(144), 414);
    });
    it("Bigger numbers", () => {
        // assert.strictEqual(nextBigger(123456789), 123456798);
        // assert.strictEqual(nextBigger(1234567890), 1234567908);
        // assert.strictEqual(nextBigger(9876543210), -1);
        // assert.strictEqual(nextBigger(9999999999), -1);
        // assert.strictEqual(nextBigger(598_848_484_59_853), 598848484_83_559);
    });
});


/* Next bigger number with the same digits
Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

12 ==> 21
513 ==> 531
2017 ==> 2071
nextBigger(num: 12)   // returns 21
nextBigger(num: 513)  // returns 531
nextBigger(num: 2017) // returns 2071
If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

9 ==> -1
111 ==> -1
531 ==> -1
nextBigger(num: 9)   // returns nil
nextBigger(num: 111) // returns nil
nextBigger(num: 531) // returns nil

https://www.codewars.com/kata/55983863da40caa2c900004e/train/typescript
*/
