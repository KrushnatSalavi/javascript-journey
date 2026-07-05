const numbers = [1, 2, 3, 4, 5];

console.log(numbers);

const mul = numbers.map( (num) => num * 2 );

console.log(mul); 

// Real world example

const users = [
    { name: "Krushna" },
    { name: "Suraj" },
    { name: "Kaushal" }
];

const names =
    users.map(user => user.name);

console.log(names);