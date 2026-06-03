function createCounter() {

    let count = 0;

    return function() {
        count++;
        console.log(count);
    };

}

const counter = createCounter();

counter();
counter();
counter();
counter();
counter();

// Real world example of Bank Account

const bankAc = function(){
	let balance = 1000;
	
	return{
		getBalance(){
			return balance;
		},
		
		 depositAm(amount){
			balance += amount;
			
		}
	};
	
}

const account = bankAc();

console.log(account.getBalance());

account.depositAm(500);

console.log(account.getBalance());