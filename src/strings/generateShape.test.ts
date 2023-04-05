export function generateShape(int: number): string {
    return Array.from(Array(int), () => new Array("+".repeat(int))).join("\n");
}


describe("Sample Test Cases", function () {
    it("Should return a string", function () {
        //   expect(generateShape(1)).toEqual( '+');
        expect(generateShape(3)).toEqual('+++\n+++\n+++');
        //    expect(generateShape(8)).toEqual( '++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++');
    });
});
