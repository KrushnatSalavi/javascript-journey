const promise =
new Promise((resolve, reject) => {

    resolve("Success");

});

promise.then(result => {
    console.log(result);
});

// handle error

const promise2 =
new Promise((resolve, reject) => {

    reject("Something went wrong");

});

promise2
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });