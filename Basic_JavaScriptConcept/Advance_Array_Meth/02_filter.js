const numbers = [1, 2, 3, 4, 5];

console.log(numbers);

const evenNumbers =
    numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);

// Real world example

const users = [
    { name: "A", active: true },
    { name: "B", active: false },
    { name: "C", active: true }
];

const activeUsers =
    users.filter(user => user.active);

console.log(activeUsers);

