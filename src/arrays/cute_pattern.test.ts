function cute_pattern(tiles: string) {

    let lines = tiles.split("\n");


    for (let _ of lines) {
        for (let i = 0; i < lines.length - 1; i++) {
            for (let j = 0; j < lines.length - 1; j++) {
                let a = lines[i][j];
                let b = lines[i][j + 1];
                let c = lines[i + 1][j];
                let d = lines[i + 1][j + 1];
                if ([a, b, c, d].every((e, _, arr) => e === arr[0])) {
                    return false
                }
            }
        }
    }
    return true;
}


const WIDTH = 35;
const LINE_WIDTH = 1;

function display_grid(pattern) {
    let res = `<svg stroke-width="${LINE_WIDTH}" stroke="black" width="${WIDTH * 4}" height="${WIDTH * 4}">`;
    pattern.split("\n").forEach((r, y) => {
        r.split("").forEach((v, x) => {
            res += `<rect fill="${(v == "W") ? "white" : "black"}" x="${x * WIDTH}" y="${y * WIDTH}" height="${WIDTH}" width="${WIDTH}"/>`;
        });
    });
    res += "</svg>";
    console.log(res);
}

function run_test(input, result) {
    display_grid(input);
    expect(cute_pattern(input)).toEqual(result);
}

describe("cute_pattern", () => {
    it("should return cute_pattern", () => {
        run_test('BWBW\nWBWB\nBWBW\nWBWB', true);
        run_test('WBWB\nBWBW\nWBWB\nBWBW', true);
        run_test('BWBW\nBWBW\nBWBW\nBWBW', true);
        run_test('BBBB\nWWWW\nBBBB\nWWWW', true);
        run_test('BWWB\nWBWW\nWWBW\nBWWB', true);
        run_test('BWWB\nWBWW\nWWBW\nBWWB', true);
        run_test('WWBW\nWBWB\nBWBW\nWBWW', true);
        run_test('WBWW\nBWBW\nWBWB\nWWBW', true);
        run_test('WBWW\nBBBW\nWBWW\nWWWB', true);
        run_test('BWWW\nWWBW\nWBBB\nWWBW', true);

        run_test('WWWW\nWBBW\nWBBW\nWWWW', false);
        run_test('BBBB\nBWWB\nBWWB\nBBBB', false);
        run_test('BWWB\nBWWB\nWBBW\nWBBW', false);
        run_test('WWWW\nWWWW\nWWWW\nWWWW', false);
        run_test('BBBB\nBBBB\nBBBB\nBBBB', false);
        run_test('BBBB\nBBBB\nWWWW\nWWWW', false);
        run_test('WWWW\nWWWW\nBBBB\nBBBB', false);
        run_test('BBWW\nBBWW\nWWBB\nWWBB', false);
        run_test('WWBB\nWWBB\nBBWW\nBBWW', false);
        run_test('WWWW\nWBBW\nWBBB\nWWBW', false);
    });
});

/*https://www.codewars.com/kata/64087fd72daf09000f60dc26/train/javascript
[Mystery #1] - Cute Pattern
You have a square shape of 4x4, you need to find out by what criterion there are cute and not cute patterns in these cases: According to the given arrangement of tiles, it is required to determine whether the executed pattern is cute. You need to write a function.

Input data:

A string value is entered into the function by type "BWBW\nBBWB\nWWBB\nBWWW".

B - black tile

W - white tile

\n - included just for line wrapping

Output data:

Return True if the pattern is cute and False otherwise.

Examples:

cute_pattern("BWBW\nBBWB\nWWBB\nBWWW") # should return True
cute_pattern("BBWB\nBBWB\nWWBW\nBBWB") # should return False

If you want to solve our problems, they are here: From Singularity Hub Community

I will gladly accept help for other languages in telegram @fimermaker

* */
