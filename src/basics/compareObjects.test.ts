var compareObjects = function (objectA, objectB) {

    if (Object.keys(objectA).length !== Object.keys(objectB).length) {
        return false;
    }

    let keys = new Set([...Object.keys(objectA), ...Object.keys(objectB)])

    for (let key of keys) {
        if (objectA.hasOwnProperty(key) &&
        objectB.hasOwnProperty(key)
    )
        {

            return  objectB[key] === objectA[key]

        }
    else
        {
            return false;
        }
    }

    return false;

};


describe("Tests", () => {
    it("test", () => {
        expect(compareObjects({name: "Katbow"}, {name11: "Katbow"})).toBeFalsy();
        expect(compareObjects({name: "Katbow"}, {name: "Katbow"})).toBeTruthy();
    });
});
