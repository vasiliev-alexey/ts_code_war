function vowelOne(s)
{ return s.split('').map(c => ['a', 'e', 'i', 'o', 'u'].includes(c.toLowerCase())  ? '1' : '0').join('');
}



describe( "vowelOne" , () => {
    it( "Sample tests", () => {
        expect( vowelOne( "vowelOne" )).toEqual( "01010101" );
      //  expect( vowelOne( "123, arou" )).toEqual( "000001011" );
    })
})
