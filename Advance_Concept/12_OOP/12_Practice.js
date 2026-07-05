class Car{
    constructor(name,brand,price){
        this.name = name;
        this.brand = brand;
        this.price = price;
    }
}

const car1 = new Car("Swift","Maruti",500000);
console.log(car1);

// Inheritance in JavaScript

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
}
}

class Student extends Person{
    constructor(name,age,grade){
        super(name,age);
        this.grade = grade;
    }

    studentinfo(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }

}

class Teacher extends Person{
    constructor(name,age,subject){
        super(name,age);
        this.subject = subject;
    }

    teacherinfo(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Subject: ${this.subject}`);
    }
}

const student1 = new Student("Krushna",20,"A");
student1.studentinfo();

const teacher1 = new Teacher("Mr. Smith",40,"Mathematics");
teacher1.teacherinfo(); 

