//Inheritance in JavaScript

class Person {

    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(
            `Hello ${this.name}`
        );
    }

}

class Student extends Person {

    constructor(name, age) {
        super(name);
        this.age = age;
    }

}

const s =
    new Student("Krushna");

s.greet();