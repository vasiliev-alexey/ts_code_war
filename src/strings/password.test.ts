function password(str) {
    //validate password
    return str.length >=8   && /[A-Z]/.test(str) && /[a-z]/.test(str) && /[0-9]/.test(str)
}




describe("Tests", () => {
    it("test", () => {
        expect(password("Abcd1234")).toEqual( true);
        expect(password("Abcd123")).toEqual( false);
        expect(password("abcd1234")).toEqual( false);
        expect(password("AbcdefGhijKlmnopQRsTuvwxyZ1234567890")).toEqual( true);
        expect(password("ABCD1234")).toEqual( false);
        expect(password("Ab1!@#$%^&*()-_+={}[]|\:;?/>.<,")).toEqual( true);
        expect(password("!@#$%^&*()-_+={}[]|\:;?/>.<,")).toEqual( false);
    });
});
