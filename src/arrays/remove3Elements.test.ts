
function remove3Elements(arr,average){

    if (average == 0  && arr.length ==3 ) {
        return  arr;
    }

    let s = arr.reduce( (a ,b ) => a+b);

    for (let i = 0; i < arr.length; i++) {

        for (let j = i+1; j < arr.length; j++) {
            for (let k = j+1; k < arr.length; k++) {
                 if  ((s - arr[i] - arr[j]- arr[k])/(arr.length -3) == average) {
                     console.log([arr[i] ,  arr[j],  arr[k]])
                    return [arr[i] ,  arr[j],  arr[k]]
                 }
            }
        }

    }

return  [];

}

describe("Tests", () => {
    it("test", () => {
      expect(remove3Elements([1,2,3,4],1) ).toEqual( [2,3,4])
      expect(remove3Elements([1,2,3,4,5,6],4) ).toEqual( [1,2,6])
      expect(remove3Elements([6,5,4,3,2,1],4) ).toEqual( [6,2,1])
      expect(remove3Elements([6,5,4,3,2,1],5) ).toEqual( [3,2,1])
      expect(remove3Elements([6,5,4,3,2,1],7) ).toEqual( [])
      expect(remove3Elements([1,2,3],0) ).toEqual( [1,2,3])
      expect(remove3Elements([1,2,3],1) ).toEqual( [])
      expect(remove3Elements([1,2,3,4,5,7,8,9,5,1,3,5,4,52,10],0) ).toEqual( [])
    });
});
