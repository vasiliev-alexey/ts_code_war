const getMilitaryTime = function (input :string) {
    const [hh, mm, ss] = input.split(":");
    const ampm = String(ss.slice(2) === "AM" ? +hh % 12 : (+hh % 12) + 12);
    return `${ampm.padStart(2, "0")}:${mm}:${ss.slice(0, 2)}`;

};




describe("Tests", () => {
    it("test", () => {
          expect(getMilitaryTime('12:00:01AM')).toEqual('00:00:01');
        expect(getMilitaryTime('11:46:47PM')).toEqual('23:46:47');
        expect(getMilitaryTime('07:05:45PM')).toEqual('19:05:45');
        expect(getMilitaryTime('01:02:03AM')).toEqual('01:02:03');
    });
});

/** What time is it?
 https://www.codewars.com/kata/57729a09914da60e17000329/train/javascript
 Given a time in AM/PM format as a string, convert it to military (24-hour) time as a string.
 Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock
 Sample Input: 07:05:45PM Sample Output: 19:05:45
 Try not to use built in DateTime libraries.
 For more information on military time, check the wiki https://en.wikipedia.org/wiki/24-hour_clock#Military_time
 */

