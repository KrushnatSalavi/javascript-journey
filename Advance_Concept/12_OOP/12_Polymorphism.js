class Animal {
    speak() {
        console.log("Animal sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Bark");
    }
}

class Cat extends Animal {
    speak() {
        console.log("Meow");
    }
}

new Dog().speak();
new Cat().speak();