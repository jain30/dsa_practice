// Recursion
// Factorial Calculation:

//1. Write a recursive function to calculate the factorial of a number.
// Example: factorial(5) should return 120.

// var factorial = function(nums){
//     if(nums === 0){
//         return 1
//     }
//     console.log(nums)
//     return nums * factorial(nums -1)
// }
// console.log(factorial(5));

// 2. Fibonacci Sequence:

// Write a recursive function to return the n-th number in the Fibonacci sequence.
// Example: fibonacci(6) should return 8.
//1,1,2,3,5,8

// function fibonacci(nums){
//     if(nums === 0){
//         return 0;
//     }else if (nums === 1){
//         return 1
//     }else{
//         return fibonacci(nums - 1) + fibonacci(nums -2)
//     }
// }
// console.log(fibonacci(6))

// 3. Sum of an Array:

// Write a recursive function to find the sum of all elements in an array.
// Example: sumArray([1, 2, 3, 4, 5]) should return 15.

// function sumArray(arr, n) {
//     // Base case
//     if (n <= 0) {
//         return 0;
//     }
//     // Recursive case
//     return arr[n - 1] + sumArray(arr, n - 1);
// }

// const arr = [1, 2, 3, 4, 5];
// console.log(sumArray(arr, arr.length)); // Output: 15
