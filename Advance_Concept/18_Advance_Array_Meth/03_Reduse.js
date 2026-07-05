const myarr = [10,12,13,14,15];

const sum = myarr.reduce( (acc, curr)=>acc+curr, 0 );
console.log(sum);

let myCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 32000},
];

const TotalPrc = myCart.reduce((acc, curr) => acc + curr.price, 0);
console.log(TotalPrc);

const newarr = myarr.reduce((acc,curr) => curr+3 + acc+curr, 0);
console.log(newarr);