class Person {
    // Get coding in ES6 :D
    constructor(public firstName = "John", public lastName = "Doe", public age = 0, public gender = "Male") {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }
    sayFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    static greetExtraTerrestrials(martians :string) {
        return `Welcome to Planet Earth ${martians}`;
    }
}


const {assert} = require('chai');
describe("Example Tests", () => {
    it("should have the correct defaults", () => {
        let john = new Person();
        assert.strictEqual(john.firstName, "John");
        assert.strictEqual(john.lastName, "Doe");
        assert.strictEqual(john.age, 0);
        assert.strictEqual(john.gender, "Male");
        assert.strictEqual(john.sayFullName(), "John Doe");
    });
    it("should work with a person Jane Doe", () => {
        let jane = new Person("Jane", "Doe", 25, "Female");
        assert.strictEqual(jane.firstName, "Jane");
        assert.strictEqual(jane.lastName, "Doe");
        assert.strictEqual(jane.age, 25);
        assert.strictEqual(jane.gender, "Female");
        assert.strictEqual(jane.sayFullName(), "Jane Doe");
    });
    it("should have the class method", () => {
        assert.strictEqual(Person.greetExtraTerrestrials("Martians"), "Welcome to Planet Earth Martians");
    });
});
