function towerBuilder(nFloors, nBlockSz) {
    const rez = [];

    for (let i = 0, nBlocks = nFloors - 1; i < nFloors; i++, nBlocks--) {

        for (let j = 0; j < nBlockSz[1]; j++) {
            const stars = '*'.repeat((i * 2 + 1) *  nBlockSz[0]);
            const spaces = ' '.repeat(nBlocks *  nBlockSz[0]);
            const section = spaces + stars + spaces;

            rez.push(section);
        }

    }
    console.log(rez)
    return rez;
}


describe("Tests", () => {
    it("test", () => {
      expect(JSON.stringify(towerBuilder(1, [1, 1]))).toEqual(JSON.stringify(["*"]));
        expect(JSON.stringify(towerBuilder(3, [4, 2]))).toEqual(JSON.stringify(['        ****        ', '        ****        ', '    ************    ', '    ************    ', '********************', '********************']));
    });
});


const swap = (a: string[], id1: number, id2: number) => {
    [a[id1], a[id2]] = [a[id2], a[id1]];
};

export const encryptThis = (str : string) : string => {
    let encrypted = str.split(' ').map((a) => {
        let temp = [...a];
        temp[0] = a.charCodeAt(0).toString();
        swap(temp, 1, temp.length - 1);
        return temp.join('');
    });

    return encrypted.join(' ');
};
