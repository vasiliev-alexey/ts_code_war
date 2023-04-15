class Animal {
    constructor(name, age, legs, species, status) {
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.species = species;
        this.status = status;
    }

    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Get Coding :)

class Shark extends Animal {
    constructor(name, age, status) {
        super(name, age, 0, "shark", status);
    }
}

class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age, 4, "cat", status);

    }

    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
    }
}

class Dog extends Animal {
    // On your own now - you can do it :D
    constructor(name, age, status, master) {
        super(name, age, 4, "dog", status);
        this.master = master;

    }

    greetMaster() {
        return `Hello ${this.master}`;
    }
}


describe("The Shark class", () => {
    it("should construct an object properly", () => {
        let billy = new Shark("Billy", 3, "Alive and well");
        expect(billy.name).toEqual("Billy");
        expect(billy.age).toEqual(3);
        expect(billy.legs).toEqual(0);
        expect(billy.species).toEqual("shark");
        expect(billy.status).toEqual("Alive and well");
        expect(billy.introduce()).toEqual(`Hello, my name is Billy and I am 3 years old.`);
        let charles = new Shark("Charles", 8, "Finding a mate");
        expect(charles.name).toEqual("Charles");
        expect(charles.age).toEqual(8);
        expect(charles.legs).toEqual(0);
        expect(charles.species).toEqual("shark");
        expect(charles.status).toEqual("Finding a mate");
        expect(charles.introduce()).toEqual(`Hello, my name is Charles and I am 8 years old.`);
    });
});

describe("The Cat class", () => {
    it("should construct an object properly", () => {
        var cathy = new Cat("Cathy", 7, "Playing with a ball of yarn");
        expect(cathy.name).toEqual("Cathy");
        expect(cathy.age).toEqual(7);
        expect(cathy.legs).toEqual(4);
        expect(cathy.species).toEqual("cat");
        expect(cathy.status).toEqual("Playing with a ball of yarn");
        expect(cathy.introduce()).toEqual("Hello, my name is Cathy and I am 7 years old.  Meow meow!");
        var spitsy = new Cat("Spitsy", 6, "sleeping");
        expect(spitsy.name).toEqual("Spitsy");
        expect(spitsy.age).toEqual(6);
        expect(spitsy.legs).toEqual(4);
        expect(spitsy.species).toEqual("cat");
        expect(spitsy.status).toEqual("sleeping");
        expect(spitsy.introduce()).toEqual("Hello, my name is Spitsy and I am 6 years old.  Meow meow!");
    });
});

describe("The Dog class", () => {
    it("should construct an object properly", () => {
        var doug = new Dog("Doug", 12, "Serving his master", "Eliza");
        expect(doug.name).toEqual("Doug");
        expect(doug.age).toEqual(12);
        expect(doug.legs).toEqual(4);
        expect(doug.species).toEqual("dog");
        expect(doug.status).toEqual("Serving his master");
        expect(doug.introduce()).toEqual( "Hello, my name is Doug and I am 12 years old.");
        expect(doug.greetMaster()).toEqual("Hello Eliza");
    });
});
