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

const count = function() {
	let ct = 0;
	return function() {
		ct++;
		console.log(ct);
	}
}

const count1 = count();
count1();
count1();

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