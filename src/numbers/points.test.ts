export function points(games : string[]): number {
  return  games.map( e=> e.split(":").map( v => +v)).map(  s => s[0] > s[1]?  Number(3) :  s[0] == s[1] ? +1 : +0 ).reduce(  (a,s) => a + s , 0)

}




// TODO Add your tests here
describe("Basic tests", function(){
    it("Testing for points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3'])", function(){
       expect(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])).toEqual( 30);
    });
    it("Testing for points(['1:1','2:2','3:3','4:4','2:2','3:3','4:4','3:3','4:4','4:4'])", function(){
       expect(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"])).toEqual( 10);
    });
    it("Testing for points(['0:1','0:2','0:3','0:4','1:2','1:3','1:4','2:3','2:4','3:4'])", function(){
       expect(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"])).toEqual( 0);
    });
    it("Testing for points(['1:0','2:0','3:0','4:0','2:1','1:3','1:4','2:3','2:4','3:4'])", function(){
       expect(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"])).toEqual( 15);
    });
    it("Testing for points(['1:0','2:0','3:0','4:4','2:2','3:3','1:4','2:3','2:4','3:4'])", function(){
       expect(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"])).toEqual( 12);
    });
});
/*
https://www.codewars.com/kata/5bb904724c47249b10000131/solutions/rust
* */
