function solve(grid : (0|1)[], width: number, height: number) {
    let rez = [];
    for (let i = 0; i <  height *width; i += width) {
           rez.push(grid.slice(i, i + width))
    }

    function fillMap(x: number, y: number, image: any) {
        if (x >= 0 && x < image[0].length && y >= 0 && y < image.length && image[y][x] != 0) {
            image[y][x] = 0;
            image[x - 1][ y]=2;
            image[x + 1][ y]=2;
            image[x][ y - 1]=2;
            image[x][ y + 1]=2;

        }
    }
    console.log("rez before", rez)
    for(let y = 0; y < rez.length; y++) {
        for(let x = 0; x < rez[0].length; x++) {
            if (rez[y][x] === 1) {
              fillMap(x,y,rez);
            }
        }
    }
    console.log("rez", rez)
    return "...here you come in...";
}



describe("Basics", function() {
    it("The lone island", function() {
        const expected = '  +  \n'+
            ' +*+ \n'+
            ' +*+ \n'+
            '  +  \n'+
            '     ';
        console.log("This is what I expected:\n" + expected);
        expect(solve([
            0,0,1,0,0,
            0,1,0,1,0,
            0,1,0,1,0,
            0,0,1,0,0,
            0,0,0,0,0
        ], 5, 5)).toEqual( expected);
    });
    // it("The horse shoe (the edges don't count)", function() {
    //     const expected = ' + + \n'+
    //         ' + + \n'+
    //         ' + + \n'+
    //         '  +  \n'+
    //         '     ';
    //     console.log("This is what I expected:\n" + expected);
    //
    //     expect(solve([
    //         0,1,0,1,0,
    //         0,1,0,1,0,
    //         0,1,0,1,0,
    //         0,0,1,0,0,
    //         0,0,0,0,0
    //     ], 5, 5)).toEqual( expected);
    // });
    // it("The neighbours", function() {
    //     const expected = '    ++++   \n'+
    //         '     +**+  \n'+
    //         '   +  +*+  \n'+
    //         '  +*+ +*+  \n'+
    //         ' +**+ +*+  \n'+
    //         '+***+ +**+ \n'+
    //         ' +**+ +**+ \n'+
    //         ' +++  +*+  \n'+
    //         '    ++**+  \n'+
    //         '   +***+   \n'+
    //         '  +++++    ';
    //     console.log("This is what I expected:\n" + expected);
    //
    //     expect(solve([
    //         0,0,0,0,1,1,1,1,0,0,0,
    //         0,0,0,0,0,1,0,0,1,0,0,
    //         0,0,0,1,0,0,1,0,1,0,0,
    //         0,0,1,0,1,0,1,0,1,0,0,
    //         0,1,0,0,1,0,1,0,1,0,0,
    //         1,0,0,0,1,0,1,0,0,1,0,
    //         0,1,0,0,1,0,1,0,0,1,0,
    //         0,1,1,1,0,0,1,0,1,0,0,
    //         0,0,0,0,1,1,0,0,1,0,0,
    //         0,0,0,1,0,0,0,1,0,0,0,
    //         0,0,1,1,1,1,1,0,0,0,0
    //     ], 11, 11)).toEqual(expected);
    // });
    // it("The island with the lake", function() {
    //     const expected = ' +++++++++ \n+*********+\n+***++****+\n+**+**+***+\n+***+*+***+\n+***+*+***+\n+****+****+\n+*********+\n +++++++++ ';
    //     console.log("This is what I expected:\n" + expected);
    //
    //     expect(solve([
    //         0,1,1,1,1,1,1,1,1,1,0,
    //         1,0,0,0,0,0,0,0,0,0,1,
    //         1,0,0,0,1,1,0,0,0,0,1,
    //         1,0,0,1,0,0,1,0,0,0,1,
    //         1,0,0,0,1,0,1,0,0,0,1,
    //         1,0,0,0,1,0,1,0,0,0,1,
    //         1,0,0,0,0,1,0,0,0,0,1,
    //         1,0,0,0,0,0,0,0,0,0,1,
    //         0,1,1,1,1,1,1,1,1,1,0
    //     ], 11, 9)).toEqual(expected);
    // });
});
