// 1. power
//Write a function called power which accepts a base and an exponent. 
// The function should return the power of the base to the exponent. 
// This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

// function power(base, exponent) {
//     // Base case: if exponent is 0, return 1
//     if (exponent === 0) {
//         return 1;
//     }
//     // Recursive case: multiply base by the result of power with a smaller exponent
//     return base * power(base, exponent - 1);
// }

// // Example usage:
// console.log(power(2, 3)); // Calculates 2^3 = 2 * 2 * 2 = 8
// console.log(power(5, 2)); // Calculates 5^2 = 5 * 5 = 25

// 2. factorial
// Write a function factorial which accepts a number and returns the factorial of that number. 
// A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) 
// is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

// function factorial(n) {
//     // Base case: if n is 0, return 1
//     if (n === 0) {
//         return 1;
//     }
//     // Recursive case: multiply n by the result of factorial with a smaller number
//     return n * factorial(n - 1);
// }

// // Example usage:
// console.log(factorial(4)); // Calculates 4! = 4 * 3 * 2 * 1 = 24
// console.log(factorial(0)); // Factorial of 0 is 1

// 3.productOfArray
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

// function productOfArray(arr){
//     if( arr.length === 0){
//         return 1;
//     }
//     return arr[0] * productOfArray(arr.slice(1));
// }

// let arr = [1,2,3,4]
// console.log(productOfArray(arr))

// 4. recursiveRange
// Write a function called recursiveRange which accepts a number and adds up all the numbers
// from 0 to the number passed to the function 
// function recursiveRange(num) {
//     // Base case: if num is 0, return 0
//     if (num === 0) {
//         return 0;
//     }
//     // Recursive case: add num to the sum of all numbers from 0 to num - 1
//     return num + recursiveRange(num - 1);
// }

// // Example usage:
// console.log(recursiveRange(5)); // Adds up 0 + 1 + 2 + 3 + 4 + 5 = 15
// console.log(recursiveRange(10)); // Adds up 0 + 1 + 2 + ... + 10 = 55

// 5. fib
// Write a recursive function called fib which accepts a number and returns the nth number in 
// the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole
//  numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter
//   is equal to the sum of the previous two numbers.

function fib(n){
    if(n<=2){
        return 1;
    }
    return fib(n-1) + fib(n-2)
}
console.log(fib(1)); // 1
console.log(fib(2)); // 1
console.log(fib(3)); // 2