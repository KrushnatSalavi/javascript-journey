numbers = [1, 2, 3, 4, 5];

const result =
    numbers
        .filter(num => num % 2 === 0)
        .map(num => num * 10);

console.log(result);


//Functional Programming Mindset


let result2 = [];

for(let i=0;i<numbers.length;i++) {

    if(numbers[i] % 2 === 0) {
        result2.push(numbers[i] * 2);
    }

}
console.log(result2);

//Modern JS:

const result3 =
    numbers
        .filter(n => n % 2 === 0)
        .map(n => n * 2);
console.log(result3);


