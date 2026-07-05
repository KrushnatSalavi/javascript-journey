//Instead of waiting for the heavy task to complete, we can use asynchronous code to allow other tasks to run while waiting for the heavy task to finish.

console.log("Start");

setTimeout(() => {
    console.log("Done");
}, 2000);

console.log("End");

