function kebabize(str: string) {
     let rz =   str.split('')
         .filter(c => c.charCodeAt(0) >= 65 )
        .reduce((a, b, i) => a +  (b == b.toUpperCase() ? '-' + b.toLowerCase() : b), '').replace(/^\-+/, '');
    console.log(rz);
    return rz;
}


describe('tests', () => {
    it('fixed tests', () => {
       // expect(kebabize('myCamelCasedString')).toEqual('my-camel-cased-string');
       expect(kebabize('myCamelHas3Humps')).toEqual('my-camel-has-humps');
        expect(kebabize('dap')).toEqual('dap');
        expect(kebabize('GpcoF')).toEqual('gpco-f');
        //  expect(kebabize('CAMEL')).toEqual( "c-a-m-e-l");
    });
});

/*Kebabize
https://www.codewars.com/kata/57f8ff867a28db569e000c4a/train/javascript
Modify the kebabize function so that it converts a camel case string into a kebab case.

"camelsHaveThreeHumps"  -->  "camels-have-three-humps"
"camelsHave3Humps"  -->  "camels-have-humps"
"CAMEL"  -->  "c-a-m-e-l"

Notes:

    the returned string should only contain lowercase letters

*/
