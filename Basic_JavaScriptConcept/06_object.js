const user = {
    name: "Krushna",
    age: 21,
    city: "Kolhapur"
};
console.log(user.name);
console.log(user["age"]);

// Adding new property to object
user.country = "India";
console.log(user);

//Deleting a property from object
delete user.city;
console.log(user);

//Objects Can Store Any Data Type

const student = {
    name: "Krushna",
    age: 21,
    isPassed: true,
    marks: [80, 90, 95]
};
console.log(student);

//The "this" Keyword in Objects

const user2 = {
    name: "Krushna",

    greet() {
        console.log(`Hello ${this.name}`);
    }
};

user2.greet();

//Looping through Object Properties

for (let stu in student) {
    console.log(stu, student[stu]);
}

//Array of Objects

const user3 = [
    {
        id: 1,
        name: "Krushna"
    },
    {
        id: 2,
        name: "Suraj"
    }
];

console.log(user3[1].name);

const user4 = {
    name: "Krushna",
    age: 21
};

const copy = { ...user };

console.log(copy);

const product = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 }
];

const expensiveProducts = product.filter(p => p.price > 30000);

console.log(expensiveProducts);
