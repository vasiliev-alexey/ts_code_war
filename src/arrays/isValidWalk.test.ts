function isValidWalk(walk: string[]) {

 if(walk.length != 10  ) {
     return  false;
 }
    let h = 0, v = 0;
    for (let s of walk) {
        if (s == 's') {
            v++;
        } else if (s == 'n') {
            v--;
        } else if (s == 'w') {
            h++;
        } else if (s == 'e') {
            h--;
        }
    }

    return v ==0 && h==0

}


// TODO Add your tests here
describe("example", function () {
    it("test", function () {
       expect(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])).toEqual( true);
       expect(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'])).toEqual( false);
       expect(isValidWalk(['w'])).toEqual( false);
       expect(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])).toEqual( false);
    });
});
