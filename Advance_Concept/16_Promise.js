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

const PromiseOne = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async task is completed")
        resolve()
    },1000)
})

PromiseOne.then(()=>{
    console.log("promise consumed")
})

const promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({
            user: 'Krushna',
            email : 'krushna@gmail.com'
        })
    },1000)
})

promise3.then((user)=>{
    console.log(user);
})