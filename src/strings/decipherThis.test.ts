

const decipherThis = (str) => {

    const swap = (a: string[], id1: number, id2:number) => {
         console.log(typeof  a , typeof  id1);
        [a[id1], a[id2]] = [a[id2], a[id1]];
    };

    let deciphered = str.split(' ').map((a) => {
        let nums = a.replace(/\D+/g, '');
        let chars = [...a.replace(/[0-9]/g, '')];
        swap(chars, 0, chars.length - 1);
        return String.fromCharCode(Number(nums)) + chars.join('');
    });

    return deciphered.join(' ')
};

describe('decipherThis', () => {
    it('Have', () => {
        expect(decipherThis('72eva')).toEqual( 'Have');
    });

    it('Have a go at this and see how you do', () => {
        expect(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o')).toEqual( 'Have a go at this and see how you do');
    });
});
