const nums = [10, 5, 20];

nums.sort(); // Default sorting (lexicographical) wrong for numbers

// To sort numbers correctly, we need to provide a compare function

nums.sort((a, b) => a - b); // Ascending order

nums.sort((a, b) => b - a); // Descending order

console.log(nums);

const names = ["John", "Alice", "Bob"];

names.sort();   
console.log(names); 