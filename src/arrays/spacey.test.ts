function spacey(array){
    return array.map( (_ , i ) =>  array.slice(0, i+1).join(""))
}

describe("Tests", () => {
    it("test", () => {
        expect(spacey(['kevin', 'has','no','space'])).toEqual( [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']);
        expect(spacey(['this','cheese','has','no','holes'])).toEqual( ['this','thischeese','thischeesehas','thischeesehasno','thischeesehasnoholes']);
    });
});
