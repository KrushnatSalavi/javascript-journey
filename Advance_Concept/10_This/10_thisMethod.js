//...........................call()

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

// ......................apply()

function info(city, state){
    console.log(`${this.name} from ${city},${state}`)
}

const user4 = {
    name: "Krushna"
};

info.apply(user4, ["Kolhapur", "Maharashtra"]);//apply() method is similar to call() method but it takes arguments as an array.


//...........................bind()

function info2(){
    console.log(`hello ${this.name}`);
}

const user5 = {
    name: "Suraj"
};

const bindedInfo = info2.bind(user5);//bind() method returns a new function that, when called, has its this keyword set to the provided value.

bindedInfo();