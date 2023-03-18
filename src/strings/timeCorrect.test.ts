export function timeCorrect(timestring: string | null): string | null {
    if (timestring == null || timestring == "") {
        return timestring;
    }
 //   console.log("m", timestring.match(/\d\d:\d\d:\d\d/ig));
     if (!timestring.match(/\d\d:\d\d:\d\d/ig) ) {
         return null;
     }

     let  [h , m, s] = timestring.split(":").map( e => +e);

     if (h < 24 && m < 60 && s < 60 ) {
         return  timestring;
     }

     if (s >= 60) {

          m = m +Math.floor(s /60);
         s = s%60;
     }
    if (m >= 60) {
        h = h +Math.floor(m /60);
        m = m%60;

    }

     if (h  >= 24 ) {
         h = h%24;
     }
    return  `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}





describe("solution", function(){
    it("Basic Tests", function() {
        // Null or Empty
       expect(timeCorrect(null)).toEqual( null);
       expect(timeCorrect("")).toEqual( "");

// Invalid Format
       expect(timeCorrect("001122")).toEqual( null);
       expect(timeCorrect("00;11;22")).toEqual( null);
       expect(timeCorrect("0a:1c:22")).toEqual( null);

// Correction Tests
   //     expect(timeCorrect("09:10:01")).toEqual( "09:10:01");
        expect(timeCorrect("11:70:10")).toEqual( "12:10:10");
        expect(timeCorrect("19:99:09")).toEqual( "20:39:09");
        expect(timeCorrect("19:99:99")).toEqual( "20:40:39");
        expect(timeCorrect("24:01:01")).toEqual( "00:01:01");
        expect(timeCorrect("52:01:01")).toEqual( "04:01:01");
    });
});
