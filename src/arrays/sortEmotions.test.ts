function sortEmotions(arr, order){

    const toNum  = (e : string , n : number) => {

        switch (e) {
            case ":D" : return n * 1;
            case ":)" : return n * 2;
            case ":|" : return n * 3;
            case ":(" : return n * 4;
            case "T_T" : return n * 5;
        }


    }

    return  arr.sort( (a ,b) => toNum(a, order?1:-1) - toNum(b, order?1:-1))
}




describe('Basic Tests', function(){
    it('Descending', function(){
       expect(sortEmotions([ ':D', 'T_T', ':D', ':(' ], true)).toEqual( [ ':D', ':D', ':(', 'T_T' ])
        expect(sortEmotions([ 'T_T', ':D', ':(', ':(' ], true)).toEqual( [ ':D', ':(', ':(', 'T_T' ])
        expect(sortEmotions([ ':)', 'T_T', ':)', ':D', ':D' ], true)).toEqual( [ ':D', ':D', ':)', ':)', 'T_T' ])
    })
    it('Ascending', function(){
        expect(sortEmotions([ ':D', 'T_T', ':D', ':(' ], false)).toEqual( [ 'T_T', ':(', ':D', ':D' ])
        expect(sortEmotions([ 'T_T', ':D', ':(', ':(' ], false)).toEqual( [ 'T_T', ':(', ':(', ':D' ])
        expect(sortEmotions([ ':)', 'T_T', ':)', ':D', ':D' ], false)).toEqual(  [ 'T_T', ':)', ':)', ':D', ':D' ])
    })
    it('Empty array', function(){
        expect(sortEmotions([], false)).toEqual( [])
        expect(sortEmotions([], true)).toEqual( [])
    })
})
