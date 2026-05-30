const myArray = [1, 2, 3, 4, 5, 13, 12];

// myArray.push(7);
console.log("initial Array",myArray);
// console.log(myArray.length); 
// const m1 = myArray.sort((a, b) => a - b);
// console.log(m1);

const m2 = myArray.slice(3,5);
console.log("Sliced Array:-",m2);

const m3 = myArray.splice(0,5);
console.log("Array after splice :-",m3);
console.log("Original Array:-",myArray);
