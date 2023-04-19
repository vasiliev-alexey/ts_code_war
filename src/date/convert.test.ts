function convert(time){
    //Your code here!

    return `${time.getHours().toString().padStart(2, "0")}:${time.getMinutes().toString().padStart(2, "0")}:${time.getSeconds().toString().padStart(2, "0")},${time.getMilliseconds().toString().padStart(3, "0")}`
}

describe("Basic tests",() =>{

    it('should ', function () {
        expect(convert(new Date(2016, 2, 8, 16, 42, 59))).toEqual( "16:42:59,000");
        expect(convert(new Date(1951, 10, 31, 2, 2, 24, 399))).toEqual( "02:02:24,399");
        expect(convert(new Date(1523, 5, 29, 23, 2, 2, 9))).toEqual( "23:02:02,009");
        expect(convert(new Date(1, 1, 1, 1, 1, 1, 110))).toEqual( "01:01:01,110");
        expect(convert(new Date(9999, 9, 9, 9, 9, 9, 999))).toEqual( "09:09:09,999");
        expect(convert(new Date(2, 12, 30, 23, 59, 59, 875))).toEqual( "23:59:59,875");
        expect(convert(new Date(1850, 12, 30, 13, 39, 19))).toEqual( "13:39:19,000");
        expect(convert(new Date(1978, 3, 18, 12, 0, 0, 0))).toEqual( "12:00:00,000");
        expect(convert(new Date(1850, 12, 30, 11, 11, 11, 123))).toEqual( "11:11:11,123");
        expect(convert(new Date(1850, 12, 30, 0, 0, 0, 321))).toEqual( "00:00:00,321");
    });


})
