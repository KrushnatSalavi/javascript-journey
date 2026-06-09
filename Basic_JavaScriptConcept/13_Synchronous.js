console.log("A");
console.log("B");
console.log("C");
// Output will be in order
//  A, B, C because JavaScript is synchronous and executes code line by line.




// Problem with Synchronous Code


console.log("Start");

// Takes 5 seconds
heavyTask();

console.log("End");

// Start
// (wait 5 seconds)
// End

//The entire program is blocked.

// Users hate this.

//Instead of waiting: We use Asynchronous code to handle such tasks without blocking the main thread.