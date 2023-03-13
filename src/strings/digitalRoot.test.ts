export const digitalRoot = (n:number):number => {
    let  str = n.toString();
    while ( str.length > 1) {
        str =  str.split('').map( e =>  +e).reduce(  (a ,b) =>a+b,  0).toString()
    }
    return  +str;
};


describe("solution", () => {
    it('should work for fixed tests', () => {
       expect(digitalRoot(16)).toEqual( 7);
       expect(digitalRoot(456)).toEqual( 6 );
       expect(digitalRoot(132189)).toEqual( 6 );
       expect(digitalRoot(493193)).toEqual( 2 );
    });
});
