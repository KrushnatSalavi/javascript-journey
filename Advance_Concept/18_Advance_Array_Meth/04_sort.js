const nums = [10, 5, 20];

const defaultSorted = nums.sort(); // Default sorting (lexicographical) wrong for numbers
console.log(defaultSorted); // Output might be [10, 20, 5] which is incorrect for numbers


// To sort numbers correctly, we need to provide a compare function

const sortedNums = nums.sort((a, b) => a - b); // Ascending order
console.log(sortedNums);

const descendingNums = nums.sort((a, b) => b - a); // Descending order
console.log(descendingNums);

const names = ["John", "Alice", "Bob"];

const sortedNames = names.sort();   
console.log(sortedNames); 