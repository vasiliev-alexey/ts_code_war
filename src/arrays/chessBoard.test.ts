function chessBoard(rows, columns) : string[][] {

    return  [...Array(rows)].map((x , i) => Array(columns).fill("O").map( ( v ,  ind) => (i+ ind)%2 ? "X" : v ));


}


describe('the chessboard', function () {
    it('should have correct number of rows and columns', function () {
        for (let i = 0; i < 4; i++) {
            let rows = Math.floor(Math.random() * 20 + 1);
            let columns = Math.floor(Math.random() * 20 + 1);

            expect(chessBoard(rows, columns).length).toEqual( rows);
            // @ts-ignore
            expect(chessBoard(rows, columns)[0].length).toEqual( columns);
        }
    });

    it("O's and X's should alternate correctly", function () {

        for (let i = 0; i < 3; i++) {

            let rows = Math.floor(Math.random() * 10 + 2);
            let columns = Math.floor(Math.random() * 10 + 2);
            console.log(rows + " - rows, ", columns + " - columns");
            for (let j = 0; j < rows; j += 2) {
               expect(chessBoard(rows, columns)[j][0]).toEqual( 'O');
                if (j + 1 < rows) expect(chessBoard(rows, columns)[j + 1][0]).toEqual( 'X');
            }
        }
    });
});

// https://www.codewars.com/kata/56242b89689c35449b000059/train/javascript
