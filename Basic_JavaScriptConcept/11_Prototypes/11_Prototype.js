const user = {
    name: "Krushna"
};

console.log(
    Object.getPrototypeOf(user)
);

const arr = [1, 2, 3];

console.log(
    Object.getPrototypeOf(arr)
);

// String Prtotype

const name = "Krushna";

console.log(name.toUpperCase());

//Adding Your Own Prototype Methods

Array.prototype.sayHello =
function() {
    console.log("Hello");
};

const arr1 = [1, 2, 3];

arr1.sayHello();