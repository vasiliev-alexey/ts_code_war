function findDuplicatePhoneNumbers(phoneNumbers: string[]) {

    const toDig = (s: string): string => {
        const alp = new Map(
            [
                ['A', 2], ['B', 2], ['C', 2],
                ['D', 3], ['E', 3], ['F', 3],
                ['G', 4], ['H', 4], ['I', 4],
                ['J', 5], ['K', 5], ['L', 5],
                ['M', 6], ['N', 6], ['O', 6],
                ['P', 7], ['R', 7], ['S', 7],
                ['T', 8], ['U', 8], ['V', 8],
                ['W', 9], ['X', 9], ['Y', 9],
            ]
        );

        return alp.get(s.toUpperCase())?.toString()||s
    }
   let nums = phoneNumbers.map( t => t.replaceAll( '-' , "").split("").map(toDig).join("")).map( t => t.substring(0,3)+ "-"+t.substring(3));
    let  tCount = new Map();
    nums.forEach( t => tCount.set(t, (tCount.get(t)|0)+1) );

    let mapAsc = new Map([...tCount.entries()].filter( v => v[1] > 1).sort());

  return  [...mapAsc.entries()].map( e => `${e[0]}:${e[1]}`)






}

// https://www.codewars.com/kata/58bf67eb68d8469e3c000041/train/javascript


describe("Basic Tests", function () {
    it("It should works for basic tests.", function () {

        var testarr = [
                "7399425",
                "SEXY-GAL",
                "Sexy-GAL",
                "sexy-gal",
                "SEXY-425",
                "S-E-X-Y-G-A-L"
            ],
            result = [
                "739-9425:6"]
        expect(findDuplicatePhoneNumbers(testarr)).toEqual(result)

        testarr = [
            "4873279",
            "ITS-EASY",
            "888-4567",
            "3-10-10-10",
            "888-GLOP",
            "TUT-GLOP",
            "967-11-11",
            "310-GINO",
            "F101010",
            "888-1200",
            "-4-8-7-3-2-7-9-",
            "487-3279"]
        result = [
            "310-1010:2",
            "487-3279:4",
            "888-4567:3"]
        expect(findDuplicatePhoneNumbers(testarr)).toEqual(result)

    })
})
