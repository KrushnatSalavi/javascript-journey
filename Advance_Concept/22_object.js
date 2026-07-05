const Me = {
    name: "Krushna",
    age: 21,
    email: 'kms@gmail.com'
}

console.log(Object.getOwnPropertyDescriptor(Me, 'name'));


Object.defineProperty(Me, 'name', {
    writable: false,
    enumerable: false,
    configurable: false
})

console.log(Object.getOwnPropertyDescriptor(Me, 'name'));
