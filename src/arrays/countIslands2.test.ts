function countIslands (mapStr) {
    let map = mapStr.split("\n").map( s => s.split("").map(c => c == 0 ? 1 : 0))
    console.log(map)

    const  exploreMap =  (x,y, map)  =>{
        if (x >= 0 && x < map[0].length && y >= 0 && y < map.length && map[y][x] != 0) {
            map[y][x] = 0;
            exploreMap(x - 1, y, map);
            exploreMap(x + 1, y, map);
            exploreMap(x, y - 1, map);
            exploreMap(x, y + 1, map);
          //  exploreMap(x + 1, y + 1, map);
           // exploreMap(x - 1, y + 1, map);
          //  exploreMap(x - 1, y - 1, map);
         //   exploreMap(x + 1, y - 1, map);
        }
    }

    let islandCount = 0;
    for(let y = 0; y < map.length; y++) {
        for(let x = 0; x < map[0].length; x++) {
            if (map[y][x] === 1) {
                islandCount++;
                exploreMap(x,y,map);
            }
        }
    }
    return islandCount;


}


describe("Tests", () => {
    it("test", () => {
       expect(countIslands('00...0\n0...00\n......\n0.0.0.\n0.....')).toEqual( 5);
        expect(countIslands("..000.\n..000.\n..000.\n.0....\n..000.")).toEqual( 3);
    });
});
