 const promiseFour = new Promise( (resolve , reject) => {
    setTimeout( () =>{
        let error = true
        if(!error){
            resolve({username : 'krushna', password:123456})
        }else{
            reject('ERROR: Somthing went wrong')
        }
    },2000)
 })

promiseFour.then((user) =>{
    console.log(user);
    return user.username
}).then( (username) =>{
    console.log(username)
}).catch( (error)=>{
    console.log(error);
})