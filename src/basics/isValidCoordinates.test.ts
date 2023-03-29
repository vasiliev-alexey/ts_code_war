const isValidCoordinates = (coordinates : string) => {
    const isValid = (coordinate : string, type : "lat" | "long" ) => {
        if (type === "lat") {
            return Math.abs(+coordinate) >= 0 && Math.abs(+coordinate) <= 90;
        } else {
            return Math.abs(+coordinate) >= 0 && Math.abs(+coordinate) <= 180;
        }
    };

    const isDigitOrSpecChar = (str: string) => {
        const allowed = [
            "-", ",", ".", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        ];
        for (let char of [...str]) {
            if (!allowed.includes(char) || char === " ") {
                return false;
            }
        }
        return true;
    };


    const lat = coordinates.split(",")[0];
    const long = coordinates.split(",")[1].slice(1);
    return !(coordinates.split(",").length > 2 ||
        !isValid(lat, "lat") ||
        !isValid(long, "long") ||
        !isDigitOrSpecChar(lat) ||
        !isDigitOrSpecChar(long));
};
// https://www.codewars.com/kata/5269452810342858ec000951/train/typescript



describe("Tests", () => {
    it("test", () => {

        const ValidCoordinates = [
            "-23, 25",
            "4, -3",
            "24.53525235, 23.45235",
            "04, -23.234235",
            "43.91343345, 143"
        ];
        for (let i = 0; i < ValidCoordinates.length; i++) {
            expect(isValidCoordinates(ValidCoordinates[i])).toBeTruthy();
        }

        const InvalidCoordinates = [
            "23.234, - 23.4234",
            "2342.43536, 34.324236",
            "N23.43345, E32.6457",
            "99.234, 12.324",
            "6.325624, 43.34345.345",
            "0, 1,2",
            "0.342q0832, 1.2324",
            "23.245, 1e1"
        ];
        for (let i in InvalidCoordinates) {
            expect(isValidCoordinates(InvalidCoordinates[i])).toBeFalsy();
        }
    });
});
