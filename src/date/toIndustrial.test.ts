function toIndustrial(time : number | string) : number  {
    if (typeof  time == "string") {
         const [ h , m ] = time.split(":").map( e => +e);
        return +( (h*60 + m) * 60/36 / 100).toFixed(2)
    return  0;
    }
    else {
       return +(time * 60/36 / 100).toFixed(2)
    }



}

function toNormal(time : number) : string{
    let ret = time *100*36;
    const  h = Math.floor(ret/3600);
    const  m = Math.round( (ret %3600) /60);
    return  `${h}:${m.toString().padStart(2 ,'0')}`;
}


describe('Fixed tests', () => {
    it('toIndustrial() for int inputs', () => {
        expect(toIndustrial(1)).toEqual(0.02);
        expect(toIndustrial(2)).toEqual(0.03);
        expect(toIndustrial(105)).toEqual(1.75);
    });

    it('toIndustrial() for string inputs', () => {
        expect(toIndustrial("0:03")).toEqual(0.05);
        expect(toIndustrial("0:04")).toEqual(0.07);
        expect(toIndustrial("1:45")).toEqual(1.75);
    });

    it('toNormal() for float inputs', () => {
        expect(toNormal(1.50)).toEqual("1:30");
        expect(toNormal(0.33)).toEqual("0:20");
    });
});


/* Write two functions, one that converts standard time to decimal time and one that converts decimal time to standard time.

    toIndustrial(time) should accept either the time in minutes as an integer or a string of the format "h:mm". Minutes will always consist of two digits in the tests (e.g., "0:05"); hours can have more. Return a double that represents decimal hours (e.g. 1.75 for 1h 45m). Round to a precision of two decimal digits - do not simply truncate!
    toNormal(time) should accept a double representing decimal time in hours. Return a string that represents standard time in the format "h:mm".
    One hour has 100 minutes (or 10,000 seconds) in decimal time, yet its duration is the same as in standard time. Thus a decimal minute consists of 36 standard seconds, which is 1/100 of an hour.
    Working time is usually rounded to Integer decimal minutes. Thus one normal minute equals 0.02 decimal hours, while two normal minutes equal 0.03 decimal hours and so on.
    There will be no seconds in the tests. We'll neglect them for the purpose of this kata.
    https://www.codewars.com/kata/6397b0d461067e0030d1315e/train/javascript
*/
