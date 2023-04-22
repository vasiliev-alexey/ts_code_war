function deepCompare(o1, o2) {
    if (o1 !== null && typeof o1 === "object" && o2 !== null && typeof o2 === "object") {
        const keysO1 = Object.keys(o1);
        const keysO2 = Object.keys(o2);
        const keys = keysO1.length > keysO2.length ? keysO1 : keysO2;

        return keys.every((key) => deepCompare(o1[key], o2[key]));
    } else {
        return o1 === o2;
    }
};



describe("Tests", () => {
    it("test", () => {


        expect(deepCompare({name: 'Joe'}, {name: 'Joe'})).toBeTruthy();

    });
});
