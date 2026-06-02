
const student = {
    name: "Krushnat",
    age: 21,
    city: "Kolhapur"
};

console.log(student);

student.roll = 21;
delete student.city;

console.log(student);


for (let std in student) {
    console.log("student Infromation", student[std]);
}

const { name, age } = student;

console.log(name);


const student2 = [

    {name:"Suraj",
    age: 22,
    city: "Pune"},

    {name:"Krushna",
    age: 21,
    city: "Kolhapur"},
];

// function to print hello for each student
const std_info = function() {
    student2.forEach(s => console.log(`Hello ${s.name}`));
};

student2.std_info = std_info;
student2.std_info();

const info = student2.map(stu => stu.name);

console.log(info);  

const avgStd = student2.find(stu=>stu.name === "Suraj");

console.log(avgStd);

const filterStd = student2.filter(stu => stu.age > 21);

console.log(filterStd);

let Dev = {
	name:"Krushnat",
	age:"21",
	
};

const info = function(anyobject){
	console.log(`Devloper ${anyobject.name}Age${anyobject.age}`)
}

info(Dev);

