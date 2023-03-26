const t = [
    ' AAA  BBBB   CCC  DDDD  EEEEE FFFFF  GGG  H   H IIIII JJJJJ K   K L     M   M N   N  OOO  PPPP   QQQ  RRRR   SSS  TTTTT U   U V   V W   W X   X Y   Y ZZZZZ',
    'A   A B   B C   C D   D E     F     G   G H   H   I       J K  K  L     MM MM NN  N O   O P   P Q   Q R   R S   S   T   U   U V   V W   W X   X Y   Y     Z',
    'A   A B   B C     D   D E     F     G     H   H   I       J K K   L     M M M N   N O   O P   P Q   Q R   R S       T   U   U V   V W   W  X X   Y Y     Z ',
    'AAAAA BBBB  C     D   D EEEEE FFFFF G GGG HHHHH   I       J KK    L     M   M N N N O   O PPPP  Q   Q RRRR   SSS    T   U   U V   V W W W   X     Y     Z  ',
    'A   A B   B C     D   D E     F     G   G H   H   I       J K K   L     M   M N   N O   O P     Q Q Q R R       S   T   U   U V   V W W W  X X    Y    Z   ',
    'A   A B   B C   C D   D E     F     G   G H   H   I       J K  K  L     M   M N  NN O   O P     Q  QQ R  R  S   S   T   U   U  V V  W W W X   X   Y   Z    ',
    'A   A BBBB   CCC  DDDD  EEEEE F      GGG  H   H IIIII JJJJ  K   K LLLLL M   M N   N  OOO  P      QQQQ R   R  SSS    T    UUU    V    W W  X   X   Y   ZZZZZ']


function blockPrint(input) {

    if (input.trim().length == 0) {
        return ""
    }

    let rez = [];
    for (let i = 0; i < 7; i++) {
        rez.push(input.trim().split("").map((_, i) => input.trim().toUpperCase().charCodeAt(i) - 65).map(e => e == -33 ? '     ' : t[i].slice(e * 6, e * 6 + 5)).join(" ").trimEnd())
    }

    return rez.map(l => l.trimEnd()).join("\n");
}

describe("rr", () => {
    test("H", () => {
        let tmp = blockPrint("h ELLO");
        expect(tmp).toEqual("dd")
    })
})


describe('Fixed tests', () => {
    it('heLLo WorLD', () => {
        expect(blockPrint("heLLo WorLD")).toEqual("H   H EEEEE L     L      OOO        W   W  OOO  RRRR  L     DDDD\nH   H E     L     L     O   O       W   W O   O R   R L     D   D\nH   H E     L     L     O   O       W   W O   O R   R L     D   D\nHHHHH EEEEE L     L     O   O       W W W O   O RRRR  L     D   D\nH   H E     L     L     O   O       W W W O   O R R   L     D   D\nH   H E     L     L     O   O       W W W O   O R  R  L     D   D\nH   H EEEEE LLLLL LLLLL  OOO         W W   OOO  R   R LLLLL DDDD");
    });
    it('ABCDEFGHIJKLM', () => {
        expect(blockPrint("ABCDEFGHIJKLM")).toEqual(" AAA  BBBB   CCC  DDDD  EEEEE FFFFF  GGG  H   H IIIII JJJJJ K   K L     M   M\nA   A B   B C   C D   D E     F     G   G H   H   I       J K  K  L     MM MM\nA   A B   B C     D   D E     F     G     H   H   I       J K K   L     M M M\nAAAAA BBBB  C     D   D EEEEE FFFFF G GGG HHHHH   I       J KK    L     M   M\nA   A B   B C     D   D E     F     G   G H   H   I       J K K   L     M   M\nA   A B   B C   C D   D E     F     G   G H   H   I       J K  K  L     M   M\nA   A BBBB   CCC  DDDD  EEEEE F      GGG  H   H IIIII JJJJ  K   K LLLLL M   M");
    });
    it('NOPQRSTUVWXYZ', () => {
        expect(blockPrint("NOPQRSTUVWXYZ")).toEqual("N   N  OOO  PPPP   QQQ  RRRR   SSS  TTTTT U   U V   V W   W X   X Y   Y ZZZZZ\nNN  N O   O P   P Q   Q R   R S   S   T   U   U V   V W   W X   X Y   Y     Z\nN   N O   O P   P Q   Q R   R S       T   U   U V   V W   W  X X   Y Y     Z\nN N N O   O PPPP  Q   Q RRRR   SSS    T   U   U V   V W W W   X     Y     Z\nN   N O   O P     Q Q Q R R       S   T   U   U V   V W W W  X X    Y    Z\nN  NN O   O P     Q  QQ R  R  S   S   T   U   U  V V  W W W X   X   Y   Z\nN   N  OOO  P      QQQQ R   R  SSS    T    UUU    V    W W  X   X   Y   ZZZZZ");
    });
    it('   same', () => {
        expect(blockPrint("   same")).toEqual(" SSS   AAA  M   M EEEEE\nS   S A   A MM MM E\nS     A   A M M M E\n SSS  AAAAA M   M EEEEE\n    S A   A M   M E\nS   S A   A M   M E\n SSS  A   A M   M EEEEE");
    });
    it('same   ', () => {
        expect(blockPrint("same   ")).toEqual(" SSS   AAA  M   M EEEEE\nS   S A   A MM MM E\nS     A   A M M M E\n SSS  AAAAA M   M EEEEE\n    S A   A M   M E\nS   S A   A M   M E\n SSS  A   A M   M EEEEE");
    });
    it('   but   different   ', () => {
        expect(blockPrint("   but   different   ")).toEqual("BBBB  U   U TTTTT                   DDDD  IIIII FFFFF FFFFF EEEEE RRRR  EEEEE N   N TTTTT\nB   B U   U   T                     D   D   I   F     F     E     R   R E     NN  N   T\nB   B U   U   T                     D   D   I   F     F     E     R   R E     N   N   T\nBBBB  U   U   T                     D   D   I   FFFFF FFFFF EEEEE RRRR  EEEEE N N N   T\nB   B U   U   T                     D   D   I   F     F     E     R R   E     N   N   T\nB   B U   U   T                     D   D   I   F     F     E     R  R  E     N  NN   T\nBBBB   UUU    T                     DDDD  IIIII F     F     EEEEE R   R EEEEE N   N   T");
    });
    it('testing for empty string', () => {
        expect(blockPrint(" ")).toEqual("");
    });
    it(' tmkvubyikhgzgjpxj lzofqqac ow', () => {
        expect(blockPrint("tubudqaflfp im nskxctzxmirtqgn")).toEqual("TTTTT U   U BBBB  U   U DDDD   QQQ   AAA  FFFFF L     FFFFF PPPP        IIIII M   M       N   N  SSS  K   K X   X  CCC  TTTTT ZZZZZ X   X M   M IIIII RRRR  TTTTT  QQQ   GGG  N   N\n  T   U   U B   B U   U D   D Q   Q A   A F     L     F     P   P         I   MM MM       NN  N S   S K  K  X   X C   C   T       Z X   X MM MM   I   R   R   T   Q   Q G   G NN  N\n  T   U   U B   B U   U D   D Q   Q A   A F     L     F     P   P         I   M M M       N   N S     K K    X X  C       T      Z   X X  M M M   I   R   R   T   Q   Q G     N   N\n  T   U   U BBBB  U   U D   D Q   Q AAAAA FFFFF L     FFFFF PPPP          I   M   M       N N N  SSS  KK      X   C       T     Z     X   M   M   I   RRRR    T   Q   Q G GGG N N N\n  T   U   U B   B U   U D   D Q Q Q A   A F     L     F     P             I   M   M       N   N     S K K    X X  C       T    Z     X X  M   M   I   R R     T   Q Q Q G   G N   N\n  T   U   U B   B U   U D   D Q  QQ A   A F     L     F     P             I   M   M       N  NN S   S K  K  X   X C   C   T   Z     X   X M   M   I   R  R    T   Q  QQ G   G N  NN\n  T    UUU  BBBB   UUU  DDDD   QQQQ A   A F     LLLLL F     P           IIIII M   M       N   N  SSS  K   K X   X  CCC    T   ZZZZZ X   X M   M IIIII R   R   T    QQQQ  GGG  N   N");
    });
});
// https://www.codewars.com/kata/6375587af84854823ccd0e90/train/javascript
