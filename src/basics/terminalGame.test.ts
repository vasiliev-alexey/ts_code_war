function Hero(name = 'Hero', experience = 0, health = 100, position = '00', damage = 5) {
    this.name = name || "Hero";
    this.position = position;
    this.health = health;
    this.damage = damage;
    this.experience = experience;


}

Hero.prototype.move = function (dir) {

    let [y, x] = [+this.position.slice(0, 1), +this.position.slice(1, 2)]
    console.log(x , y)
    if (dir == "down") {
        y += 1;
    } else if (dir == "right") {
        x += 1;
    } else if (dir == "up") {
        y -= 1;
    } else if (dir == "left") {
        x -= 1;
    }

    if (y < 0 || y > 4 || x < 0 || x > 4) {
        throw "error"
    }

    this.position = `${y}${x}`
}


const {assert} = require('chai');
describe('hero class', () => {
    it('should create a hero', () => {
        let myHero = new Hero();
        assert.strictEqual(myHero.name, 'Hero', "Hero should have a 'name' attribute with value \"Hero\"");
        assert.strictEqual(myHero.experience, 0, "Hero should have an 'experience' attribute with value 0");
        assert.strictEqual(myHero.health, 100, "Hero should have a 'health' attribute with value 100");
        assert.strictEqual(myHero.position, '00', "Hero should have a 'position' attribute with value \"00\"");
        assert.strictEqual(myHero.damage, 5, "Hero should have a 'damage' attribute with value 5");
    });
    it('should use name argument', () => {
        assert.strictEqual(new Hero('Greg').name, 'Greg', "Hero Greg should have a 'name' attribute with value \"Greg\"");
    })
});


describe('move hero', function () {
    it('should update the position', function () {
        var testHero = new Hero()
        testHero.move('down')
        expect(testHero.position).toEqual('10')
        testHero.move('right')
        expect(testHero.position).toEqual('11')
        testHero.move('up')
        expect(testHero.position).toEqual('01')
        testHero.move('right')
        expect(testHero.position).toEqual('02')
        testHero.move('down')
        expect(testHero.position).toEqual('12')
        testHero.move('down')
        expect(testHero.position).toEqual('22')
    })
})


function move (position, roll) {
    return  roll * 2 + position;
}
