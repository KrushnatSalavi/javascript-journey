
//Function Hoisting

greet();

function greet() {
    console.log("Hello");
}

//var Hosting

console.log(name);

var name = "Krushna";//undefined

// Let Hosting 

console.log(age);

let age = 21; //ReferenceError: Cannot access 'age' before initialization

//Const Hosting

console.log(city);
const city = "Pune"; //ReferenceError: Cannot access 'city' before initialization

