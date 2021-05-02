 import starSign from './solution'
 

describe("Testing starSign", function() {

  it("Basic tests", () => {
    expect(starSign(new Date(1970, 5, 5))).toEqual( 'Gemini');
    expect(starSign(new Date(2000, 1, 15))).toEqual( 'Aquarius');
    expect(starSign(new Date(1987, 7, 23))).toEqual( 'Leo');
  });
});