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

function info(city, state){
    console.log(`${this.name} from ${city},${state}`)
}

const user4 = {
    name: "Krushna"
};

info.apply(user4, ["Kolhapur", "Maharashtra"]);//apply() method is similar to call() method but it takes arguments as an array.

