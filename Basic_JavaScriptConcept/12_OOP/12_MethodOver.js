class Person {

    greet() {
        console.log("Hello");
    }

}
class Student extends Person {

    greet() {
        console.log(
            "Hello Student"
        );
    }

}

const s = new Student();

s.greet();

