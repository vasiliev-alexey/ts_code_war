function bandNameGenerator(str) {
    if (str.substring(0, 1) == str.slice(-1)) {
        return str.substring(0, 1).toUpperCase() + str.slice(1).repeat(2)
    }
    return "The " + str.substring(0, 1).toUpperCase() + str.slice(1);
}


describe("Tests", () => {

    it("test", () => {
         expect(bandNameGenerator('tart')).toEqual('Tartart');
         expect(bandNameGenerator('sandles')).toEqual('Sandlesandles');
        expect(bandNameGenerator('knife')).toEqual('The Knife');


        expect(bandNameGenerator('bed')).toEqual('The Bed');
    });
});
