var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache'  }
var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst'  }

function aliasGen(f: string , l: string) {

    if (/^\d/.test(f) || /^\d/.test(l)) {
        return "Your name must start with a letter from A - Z."
    }
     return  `${firstName[f.charAt(0)]} ${surname[l.charAt(0)]}`
}





describe("Tests", () => {
    it("test", () => {
        expect(aliasGen("Alpha", "Analogue")).toEqual( "Alpha Analogue");
        expect(aliasGen("Mike", "Millington")).toEqual( "Malware Mike");
        expect(aliasGen("Fahima", "Tash")).toEqual( "Function T-Rex");
        expect(aliasGen("Daisy", "Petrovic")).toEqual( "Data Payload");
        expect(aliasGen("7393424", "Anumbha")).toEqual( "Your name must start with a letter from A - Z.");
        expect(aliasGen("Anuddanumbha", "23200")).toEqual( "Your name must start with a letter from A - Z.");

    });
});
