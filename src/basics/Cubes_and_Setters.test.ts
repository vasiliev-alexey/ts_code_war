class Cube {
    constructor(l) {
        this.length = l;
    }
    get surfaceArea() {
        return this.length * this.length * 6;
    }
    get volume() {
        return this.length ** 3;
    }
    set surfaceArea(a) {
        this.length = Math.sqrt(a / 6);
    }
    set volume(v) {
        this.length = Math.pow(v, 1 / 3);
    }

}

describe("class Cube", () => {
    it("should initialize properly and have working getters and setters", () => {
        var cube = new Cube(1);
        Test.assertEquals(cube.length, 1);
        Test.assertEquals(cube.surfaceArea, 6);
        Test.assertEquals(cube.volume, 1);
        cube.length = 2;
        Test.assertEquals(cube.surfaceArea, 24);
        Test.assertEquals(cube.volume, 8);
        cube.surfaceArea = 54;
        Test.assertEquals(cube.length, 3);
        Test.assertEquals(cube.volume, 27);
        cube.surfaceArea = 96;
        Test.assertEquals(cube.length, 4);
        Test.assertEquals(cube.volume, 64);
        cube.volume = 125;
        Test.assertEquals(Math.roundTo(cube.length, 5), 5);
        Test.assertEquals(Math.roundTo(cube.surfaceArea, 5), 150);
        cube.volume = 1000;
        Test.assertEquals(Math.roundTo(cube.length, 5), 10);
        Test.assertEquals(Math.roundTo(cube.surfaceArea, 5), 600);
    });
});
