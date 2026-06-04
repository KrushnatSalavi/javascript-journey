function greet() {

    let name = "Krushna";

    setTimeout(() => {
        console.log(name);
    }, 2000);// 2000 milliseconds = 2 seconds

}

greet();


for(var i = 1; i <= 3; i++) {

    setTimeout(() => {
        console.log(i);
    }, 1000);

}

