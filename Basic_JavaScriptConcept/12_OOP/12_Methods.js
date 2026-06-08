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

// Using super keyword to call the parent class method
class Teacher extends Person {

    greet() {
        super.greet();
        console.log(
            "Hello Teacher"
        );
    }
}

const t = new Teacher();    
t.greet();


// static methods

class MathHelper {

    static add(a, b) {
        return a + b;
    }

}
console.log(
    MathHelper.add(10, 20)
);