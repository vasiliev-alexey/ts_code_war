function hammingWeight(x : number){
 return x.toString(2).replace(/0/g, '').length;
}


describe("Tests", () => {
    it("test", () => {
        expect(hammingWeight(10)).toEqual( 2)
        expect(hammingWeight(21)).toEqual( 3)

    });
});


/*
The Hamming weight of a string is the number of symbols that are different from the zero-symbol of the alphabet used. There are several algorithms for efficient computing of the Hamming weight for numbers. In this Kata, speaking technically, you have to find out the number of '1' bits in a binary representation of a number. Thus,

hammingWeight(10) // 1010  => 2
hammingWeight(21) // 10101 => 3
The interesting part of this task is that you have to do it without string operation (hey, it's not really interesting otherwise)
* */
