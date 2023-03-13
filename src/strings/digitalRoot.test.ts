export const digitalRoot = (n:number):number => {
    let  str = n.toString();
    while ( str.length > 1) {
        str =  str.split('').map( e =>  +e).reduce(  (a ,b) =>a+b,  0).toString()
    }
    return  +str;
};


describe("solution", () => {
    it('should work for fixed tests', () => {
       expect(digitalRoot(16)).toEqual( 7);
       expect(digitalRoot(456)).toEqual( 6 );
       expect(digitalRoot(132189)).toEqual( 6 );
       expect(digitalRoot(493193)).toEqual( 2 );
    });
});


function createSpiral(n) {
    console.log(n)
    if (!n || typeof n === 'string' || isNaN(n) || n <= 0 || n % 1 !== 0) {
        return [];
    }

    const arr = Array.from({ length: n }, () => []);
    let row = 0;
    let col = 0;
    let rowEnd = n - 1;
    let colEnd = n - 1;
    let counter = 1;
    while (col <= colEnd && row <= rowEnd) {

        // Top row & middle value (Where col === colEnd && row === rowEnd)
        for (let i = col; i <= colEnd; i++) {
            arr[row][i] = counter;
            counter++;
        }
        row++;

        // end column
        for (let i = row; i <= rowEnd; i++) {
            arr[i][colEnd] = counter;
            counter++;
        }
        colEnd--;

        // end row
        for (let i = colEnd; i >= col; i--) {
            arr[rowEnd][i] = counter;
            counter++;
        }
        rowEnd--;

        // First col from end
        for (let i = rowEnd; i >= row; i--) {
            arr[i][col] = counter;
            counter++;
        }
        col++;
    }
    console.log(arr)
    return arr;
}


describe("Spiral test", function() {
    it("should return correct arrays", function() {
        expect(createSpiral(-1)).toEqual([[1]]);

    })
})
