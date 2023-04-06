function pluck(objs : object[], name: string) {

     return  objs.map( o => o[name])
}

describe("Tests", () => {
    it("test", () => {
      expect(pluck([{a:1}, {a:2}], 'a')).toEqual( [1,2])
    });
});
