// function sumOfTwoNo (a,b){
//     return a+b;
// }
// console.log(sumOfTwoNo(50,75));

// function anyDataType(a){
//     return a;
// }
// console.log(typeof(2));
// console.log(typeof(myName));
// console.log(typeof('2'));
// console.log(typeof(true));
// console.log(typeof({number :2}));

'use strict';

// let hasDriversLicense = true;
// const passTest = true;

// if(passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('i can drive: D')


// function fruitJuice (apples, oranges){
//     console.log(apples,oranges)
//     const juice = `juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// fruitJuice(5,0);

// const pooja = {
//     firstFriend : "Mee",
//     secFriend : "MySelf",
//     theridFriend : "MyDreams"

// };

// console.log(pooja)
// console.log(pooja.theridFriend)

//basic program

// let a=5;
// let b=6;
// let c=7;

// var s= (a+b+c)/2;

// var area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
// console.log(area);

// for(let i=0; i<=100; i++){
//     console.log(i)
// }

// Problem 4: Factorial
// Write a program to calculate the factorial of a given number.

// let number =5;

// let fact = 1;
// for(let i=1; i<=number; i++){
//     fact=fact*i;
    
// }
// console.log(`factorial of number is ${fact}`)

// Prompt the user to enter a number
let number = parseInt(prompt("Enter a non-negative integer:"));

// Initialize factorial to 1
let factorial = 1;

// Calculate factorial using a loop
for (let i = 1; i <= number; i++) {
    factorial *= i;
}

// Display the result
console.log("Factorial of " + number + " is: " + factorial);