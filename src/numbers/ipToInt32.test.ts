function ipToInt32(ip : string){

   return  parseInt(ip.split(".").map( oct => Number(oct).toString(2).padStart(8 , '0')).join("") ,2);

}

describe("Tests", () => {
    it("test", () => {
        expect(ipToInt32("128.32.10.1")).toEqual( 2149583361);

    });
});
