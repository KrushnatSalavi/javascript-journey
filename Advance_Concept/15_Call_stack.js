function one() {
    two();
}

function two() {
    console.log("Hello");
}

one();

//call back stack is a data structure that keeps track of the function calls in a program. When a function is called, 
// it is added to the top of the stack. When the function finishes executing, it is removed from the stack.

function greet(callback) {
    console.log("Hello");
    callback();
}

function bye() {
    console.log("Bye");
}

greet(bye);