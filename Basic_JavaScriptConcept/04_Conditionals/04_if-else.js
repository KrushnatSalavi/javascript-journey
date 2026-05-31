// take real world Exaamle for voting

let age  = 12;

if (age>=18){
    console.log("You are eligible for voting.");
}
else{
    console.log("You are not eligible for voting.");
}

//Short form of if-else.

let age = 20;

let result =
    age >= 18
        ? "Adult"//value1 if condition is true
        : "Minor";//value2 if condition is false

console.log(result);