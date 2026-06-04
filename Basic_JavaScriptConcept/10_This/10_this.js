const user = {
    name: "Krushna",

    greet(name) {
        console.log(this.name);
    }
};



user.greet();

const user2 = {
    name: "Krushna",

    greet2() {

        function inner() {
            console.log(this.name);
        }

        inner();
    }
};

 user2.greet2();//undefined because this is not pointing to user2 object but to global object. To solve this we can use arrow function as arrow function does not have its own this and it will take this from its parent scope.

const user3 = {
    name: "Krushna",

    greet3() {

        const inner = () => {
            console.log(this.name);
        };

        inner();
    }
};

user3.greet3();