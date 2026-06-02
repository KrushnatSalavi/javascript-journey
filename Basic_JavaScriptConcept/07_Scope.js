//globla scope

const name = "Krushna";

function greet() {
    console.log(name);
}

greet();

//Function Scope 

function test() {
    let message = "Hello";
    console.log(message);
}

test();

//Block Scope 

{
    let age = 21;
}

// console.log(age); //ReferenceError: age is not defined

//Lexical Scope

//Functions can access variables from their parent scope.

function outer() {

    let username = "Krushna";

    function inner() {
        console.log(username);
    }

    inner();
}

outer();