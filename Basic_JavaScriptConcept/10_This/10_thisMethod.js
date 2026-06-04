//call()

function greet() {
    console.log(this.name);
}

const user = {
    name: "Krushna"
};

greet.call(user);

function greet2(city) {
    console.log(
        `${this.name} from ${city}`
    );
}

const user2 = {
    name: "Krushna"
};

greet2.call(user2, "Kolhapur");