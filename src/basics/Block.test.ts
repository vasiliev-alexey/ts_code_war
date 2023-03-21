class Block{
      _data ;
    constructor(data){
        this._data = data;
    }

    // ...

    getWidth() {
        return this._data[0];
    }

    getLength() {
        return this._data[1];
    }

    getHeight() {
        return this._data[2];
    }

    getVolume() {
        return  this._data[0] *  this._data[1]  *  this._data[2];
    }

    getSurfaceArea() {
        return 2* (this._data[0] *  this._data[1]+ this._data[0] *  this._data[2]+ this._data[1] *  this._data[2]) ;
    }
}

describe("Tests", () => {
    it("test", () => {
        let block = new Block([2,4,6]);

       expect(block.getWidth()).toEqual(  2)
       expect(block.getLength()).toEqual( 4)
       expect(block.getHeight()).toEqual( 6)
       expect(block.getVolume()).toEqual( 48)
       expect(block.getSurfaceArea()).toEqual( 88)

    });
});
