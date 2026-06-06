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

const user2 = {
    name: "Krushna"
};

console.log(
    user2.hasOwnProperty("name")
);


// Prototype Chain Example

function User3(name) {
    this.name = name;
}

User3.prototype.greet =
function() {
    console.log("Hello");
};

const user3 = new User3("Krushna");

user3.greet();
console.log(user3);

// hasOwnProperty() method is used to check if the property is present in the object itself or in its prototype chain. It returns true if the property is present in the object itself and false if it is present in the prototype chain.

const user = {
    name: "Krushna"
};

console.log(
    user.hasOwnProperty("name")
);