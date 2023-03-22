function alphabetWar(fight : string) :  "Right side wins!"| "Left side wins!" |  "Let's fight again!"
{

  let left =   fight.split("").map( (c) =>
        {
            switch (c) {
                case  "w": return  4
                case  "p":  return 3
                case  "b":   return 2
                case  "s":  return 1
                case  "m": return  -4
                case  "q":  return -3
                case  "d":   return -2
                case  "z":  return -1
                default: return  0;
            }
        }
    ).reduce( (a ,c) => a+c, 0)
    return left == 0 ? "Let's fight again!" : left >  0?  "Left side wins!" : "Right side wins!";
}


describe( "test" , () => {
    it("test",  () => {
       expect( alphabetWar("z") ).toEqual( "Right side wins!" );
        expect( alphabetWar("zdqmwpbs") ).toEqual( "Let's fight again!" );
        expect( alphabetWar("zzzzs")).toEqual( "Right side wins!" );
        expect( alphabetWar("wwwwww")).toEqual( "Left side wins!" );
    });
})

// https://www.codewars.com/kata/59377c53e66267c8f6000027/train/javascript

/*
Introduction
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.

alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!
* */
