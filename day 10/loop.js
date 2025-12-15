// global level
var a = 10;

console.log(a)

{
    console.log(a)
}

function access() {
    console.log(a)
}
access()


// declaration at block level
{
    var b = 20;
    console.log(b)
}
console.log(b)
// declaration at function level

function dec() {
    var c = 30;
    console.log(c)
}
dec()
// console.log(c)
// let key word
// declart
// global scope
let a = 40;
console.log(num)
{
    console.log(num)
}


// block level
{
    let num1 = 90;
    console.log(num1);
}
// console.log(num1)
// console key word
const fullname ="xyz";
console.log(fullname);


// {
//     const
// }
// how are you declare variable
// var
var age; // only declaration
console.log(age);

age = 20; // only initialization

console.log(age);
var phone = 1234567890; // both possible
phone = 54165465;
console.log(phone)

var phone = 9876543210;
console.log(phone)

let email ;
console.log(email)
email="email@email"
console.log(email)
// let email ;

const name = "abc";

// loop
// for loop
for (let i =0; i<=5; i++){
    console.log(1)
}
let idx = 1;
while(idx <=5){
    console.log(idx);
    idx++;
}
let v=1;
do{
    console.log(v);
    v++;
}while(v<=5)
    let i = 1;

while (i <= 10) 
    {
    if (i % 2 === 0) 
        {
        console.log(i);
    }
    i++;
}
console.log("----------------")
for(let i=1;i<=10;i++){
    if(i%2===0){
        console.log(v)
    }
let target = 30;
let userInput = prompt("Enter a number:");

while (userInput != target) {
    alert("Not a match! Try again.");
    userInput = prompt("Enter a number:");
}

alert("Correct! You matched 30 🎉");
// object
let obj={
    name:"abc",
    age:40,
}

console.log(obj.name);
console.log(obj["age"]);


let arr=[1,2,3];
console.log(arr[3]);

// for in object
for(let key in obj){
    console.log(key + ":" + obj[key]);      
}
for (let index in arr){
    console.log(arr[idx]);}

    for(let v of arr){
    console.log(v)
}

for(let v of obj){
    console.log(v)
}


       