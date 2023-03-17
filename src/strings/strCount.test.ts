function strCount(obj : Object){
    let i = 0;
    for (const  o in  obj) {
        if(typeof obj[o] == 'object') i += strCount(obj[o]);
        if(typeof obj[o] == 'string') i += 1
    }
    return i;

}



describe("Example", () => {
    it("should test", () => {
       expect(strCount({
            first:  "1",
            second: "2",
            third:  false,
            fourth: ["anytime",2,3,4],
            fifth:  null,
            sixth:  undefined,
            seventh:{}
        })).toEqual(3);
    });
});
