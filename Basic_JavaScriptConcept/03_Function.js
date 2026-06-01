// const myFunction = function() {
//     console.log("Hello World");
// }

// myFunction(); 

// const Addition = function(Num1,Nnum2){
//     sum = Num1 + Nnum2;
//     console.log(sum);   
// }

// Addition(12,4);  

// function User(userName){
//     return `Hello ${userName}`;

// }

// console.log(User("John"));

// // Arrow Function
// const ArrowFunction = () => {
//     console.log("Hello from Arrow Function");
// }
// ArrowFunction();    

// const ArrowAddition = (Num1,Nnum2) => {
//     sum = Num1 + Nnum2;
//     console.log(sum);   
// }   

// ArrowAddition(10,5);

// // Short Arrow Function
// const ShortArrowFunction = () => console.log("Hello from Short Arrow Function");
// ShortArrowFunction();

// // Rest Parameters

// // Accept unlimited arguments

const Rst = function(...numbers){
    let sum = 0;
    for (let num in numbers ) {
        sum += numbers[num];
    }
    console.log(sum);
    }

Rst(1,2,3,4,5);