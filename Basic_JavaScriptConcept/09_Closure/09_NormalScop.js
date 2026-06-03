function outer() {
    let username = "Krushna";

    function inner() {
        console.log(username);
    }

    inner();
}

outer();

//

function outer2() {
    let username = "Suraj"

    function inner() {
        console.log(username);
    }

    return inner;
}

const myFunction = outer2();

myFunction();
