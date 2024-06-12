// Loops:
//1. Write a program to print numbers from 1 to 10 using a loop.
// let num = 10;
// for(let i = 1; i<=num; i++){
//     console.log(i)
// }

//2. Write a program to calculate the sum of all numbers from 1 to 100 using a loop.
// let nums = 100;
// let sum = 0;
// for(let i = 1; i<=nums; i++){
//     sum = sum + i;
// }
// console.log(sum)

//3. Write a program to print the even numbers between 1 and 20 using a loop.
//******* we can not use array to use just like a variable if i want to store loop 
//value then i need to push the value into the array.

// let num = 20;
// let evenNum = [];
// for(let i =1; i<=num; i++){
//     if(i%2 === 0){
//         evenNum.push(i)
//     } 
// }
// console.log(evenNum)


//4. Write a program to print the multiplication table of a given number using a loop.
// let num = 20;
// let multi = 1;
// for(let i = 1; i<=10; i++){
//     multi = num * i;
//     console.log(multi)
// }
//5. Write a program to find the factorial of a number using a loop.
// let fact = 1;
// let num = 4;
// for(let i = 1; i<=num; i++){
//     fact = fact * i;
// }
// console.log(fact)

// Conditionals:
// 6. Write a program to check if a number is positive, negative, or zero.
// let number = parseInt(prompt("enter the number:"));
// if(number>0){
//     console.log("number is positive")
// }else if(number<0){
//     console.log("number is negative")
// }else{
//     console.log("number is zero")
// }

// 7. Write a program to check if a given year is a leap year.
// let year = parseInt(prompt("enter year"));
// if((year % 4 ===0 && year % 100 !== 0) || year % 400 ===0){
//     console.log(`${year} is leap year`)
// }else{
//     console.log(`${year} is not leap year`)
// }

// 8. Write a program to find the largest of three numbers.
// let num1 = 35;
// let num2 = 35;
// let num3 = 35;

// if(num1 > num2 && num1 > num3){
//     console.log(`${num1} is largest`)
// }else if(num2 > num1 && num2 > num3){
//     console.log(`${num2} is largest`)
// }else if (num3 > num1 && num3 > num2){
//     console.log(`${num3} is largest`)
// }else{
//     console.log("All numbers are equal");
// }

// 9. Write a program to check if a number is even or odd.
// let num = parseInt(prompt("enter a number"));
// if(num % 2 === 0){
//     console.log(`${num} is even number`)
// }else{
//     console.log(`${num} is odd`)
// }

// 10. Write a program to determine if a given character is a vowel or consonant.
// let char = prompt("Enter a character").toLowerCase();
// if(char === 'a' || char ==='e'|| char ==='i' || char === 'o' || char === 'u'){
//     console.log("its vowel")
// }else if((char >= 'a' && char >='z') || (char >= 'A' && char >='Z')){
//     console.log("its consonant")
// }else{
//     console.log("dont know")
// }

// Arrays:
// 11. Write a program to find the sum of all elements in an array.
// 12. Write a program to find the maximum element in an array.
// 13. Write a program to find the minimum element in an array.
// 14. Write a program to reverse an array.
// 15. Write a program to check if an array is sorted in ascending order.


// let nums =[1,2,3,1]
// for (let i =0; i<nums.length; i++){
//     for(let j = i+1; j<nums.length; j++){
//         if(nums[i]===nums[j]){
//             console.log(nums[i])
//         }
//     }
// }

let duplicates = function (nums){
    nums.sort();

    for(let i = 0; i<nums.length; i++){
        if(nums[i]===nums[i+1]){
            return true;
        }
    return false
    }
}
let nums = [1,2,3];
console.log(duplicates(nums))

// var containsDuplicate = function(nums) {
// const hashSet = new Set();
//     for (let index = 0; index < nums.length; index++) {
//         const number = nums[index]; 
//         if (hashSet.has(number)) { 
//             return true; // Duplicate mil gaya!
//         } else {
//             hashSet.add(number); 
//         }
//     }

//     return false; // Sab unique hei bhai!
// };
// let nums = [1,2,3,1];
// console.log(containsDuplicate(nums))
