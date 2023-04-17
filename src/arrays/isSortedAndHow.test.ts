

function isSortedAndHow(array : number[]) : 'yes, ascending'| 'yes, descending'|  'no' {

     let joined = array.join("");
     let ascending = array.sort( (a , b) =>  a - b);
     if(joined == ascending.join("")) {
         return  'yes, ascending'
     }
    let descending = array.sort( (a , b) =>   b -a);
    if(joined == descending.join("")) {
        return  'yes, descending'
    }
    return  "no"
}

describe("isSortedAndHow", function() {

    it("[1, 2]", function() {
        expect(isSortedAndHow([1, 2])).toEqual( 'yes, ascending');
    });

    it("[15, 7, 3, -8]", function() {
        expect(isSortedAndHow([15, 7, 3, -8])).toEqual( 'yes, descending');
    });

    it("[4, 2, 30]", function() {
        expect(isSortedAndHow([4, 2, 30])).toEqual( 'no');
    });

});
