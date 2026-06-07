//Classes in JavaScript

class Student {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

}

const student1 =
    new Student("Krushna", 21);

console.log(student1);

//Methods in Classes

class Student1 {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }   

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

}

const student =
    new Student1("Krushna", 21);
    student.greet();