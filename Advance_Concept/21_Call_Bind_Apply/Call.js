const setUser = function(userName){
    this.userName = userName;
   console.log("called")
}

const createUSer =function(userName, userEmail,password){
    setUser.call(this,userName)

    this.userEmail = userEmail;
    this.password = password
}

const User = new createUSer("krushna","kms@gmail.com","123456")
console.log(User);
