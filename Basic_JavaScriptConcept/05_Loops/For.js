
for (let i=1;i<=5;i++){
    console.log(i);
}

// for of loop with array

let student = ["Krushna","Nagraj","Suraj"];

for (let name of student){
    console.log(name);
}

// for in loop with object

let person = {
    name : "Krushna",

    age : 25,

    city : "Pune"
}

for (let key in person){
    console.log(`${key} : ${person[key]}`);
}


// sum of first n natural numbers

let n = 5;
let sum = 0;
for (let i=1;i<=n;i++){
    sum += i;  //sum = sum + i
}   
console.log(sum);   

