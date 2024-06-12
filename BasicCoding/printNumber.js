//Problem 1: Print Numbers
//Write a program that prints numbers from 1 to 10


// for(let i=1; i<=100; i++){
//     console.log(i)
// }

// Problem 2: Even Numbers
// Write a program to print all even numbers between 1 and 20.

// for(let i=1; i<=20; i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }

// Problem 3: Multiplication Table
// Write a program to print the multiplication table of a given number (up to 10).
// let number =5;
// for(let i=1; i<=10; i++){
//     let result = number * i;
//         console.log(`${number} * ${i} = ${result}`);
    
// }

// Problem 4: Factorial
// Write a program to calculate the factorial of a given number.
// let number =parseInt(prompt("enter non-nagetive number"));
// let fact = 1;
// for(let i=1; i<=number; i++){
//     fact=fact*i;
// }
// console.log(`factorial of number is ${fact}`)

// Problem 5: Sum of Digits
// Write a program to calculate the sum of digits of a given number.

// let sumOfNumber = 621 ;

// let numberToString = sumOfNumber.toString();

// let sum =0;

// for(let i=0; i<numberToString.length; i++){
//     sum =sum +parseInt(numberToString[i]);
// }

// console.log(`sum of the ${sumOfNumber} is ${sum}`);

// Conditionals:

// Problem 1: Grade Calculator
// Write a program that takes a score as input and prints the corresponding grade (A, B, C, D, or F) based on the following criteria:

// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: Below 60

// let score =parseInt(prompt("enter your score:"));
// let grade;
// if(score =>90 && score<=100){
//    grade = "A";
// }
// else if(score =>80 && score<=89){
//     grade ="B";
// }else if(score =>70 && score<=79){
//     grade = "C";
// }else if(score =>60 && score<=69){
//     grade = "D";
// }else{
//     grade = "F";
// }

// Problem: Declare three variables firstName, lastName, and age,
//  and assign values to them. Then, concatenate the firstName and 
//  lastName variables and print the result along with the age.

// let  firstName = "pooja";
// let lastName = "Jain" ; 
// let age = 29;

// let concate = firstName + '' + lastName+ '' + age;

// console.log(concate);

// let result = 10 * 2 + 5 / 5 - 3;
// console.log(result);

// let result = 5 > 3 && 10 <= 5;
// console.log(result);

// let str = "Hello" + " " + "World";
// console.log(str);

// let firstNum = parseInt(prompt("enter 1st number"));
// let secondNum = parseInt(prompt("enter 2nd number"));

// if(firstNum > secondNum){
//     console.log("First number is larger")
// }
// else if(secondNum > firstNum){
//     console.log("second number is larger")
// }
// else{
//     console.log("both are equals")
// }

// Take a number as input
// let number = parseInt(prompt("Enter a number:"));

// // Check if the input is a valid number
// if (!isNaN(number)) {
//     // Check if the number is even
//     if (number % 2 === 0) {
//         console.log("Even");
//     } 
//     // If not even, it must be odd
//     else {
//         console.log("Odd");
//     }
// } 
// // If the input is not a valid number
// else {
//     console.log("Not a valid number");
// }


// Print Numbers from 1 to 10:
// Write a JavaScript program to print the numbers from 1 to 10 using a for loop.

// for (let i=1; i<=10; i++){
//     console.log(i)
// }

// Even Numbers Sum:
// Write a JavaScript program to find the sum of all even numbers between 1 to 20 using a while loop.
// let sum=0;
// for(let i=1; i<=20; i++){
//     if(i%2===0){
//         sum=sum +i;
//     }

// }
// console.log(sum)

// let sum = 0;

// // Iterate through numbers from 1 to 20
// for (let i = 1; i <= 20; i++) {
//     // Check if the number is even
//     if (i % 2 === 0) {
//         // Add the even number to the sum
//         sum = sum + i;
//     }
// }

// // Print the sum of even numbers
// console.log("Sum of even numbers from 1 to 20:", sum);

// Reverse String:
// Write a JavaScript program to reverse a given string using a for loop.

// let myString =prompt("enter avalid string");
// let reverseStr = '';

// for (let i = myString.length -1 ; i>=0; i--){
//     reverseStr = reverseStr + myString[i];

// }
// console.log("orignal string is:",myString);
// console.log("reverse string is:", reverseStr)

// Factorial:
// Write a JavaScript program to calculate the factorial of a given number using a for loop.
// let num =parseInt(prompt("enter valid no. : "))
// let fact = 1;

// for (let i = 1; i<=num; i++){
//     fact = fact * i ;
// }

// console.log(fact)

// Multiplication Table:
// Write a JavaScript program to display the multiplication table of a given number using a for loop.

let num = parseInt(prompt("enter a number :"))
let calc = 1;
for (let i = 1; i<=10; i++){
    calc =num *i;
    console.log(calc);
}
