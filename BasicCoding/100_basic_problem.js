// LOOP QUESTIONS
//1. Write a program to print numbers from 1 to 10
// let num = parseInt(prompt("enter a number:"))
// for(let i = 1; i<=num; i++){
//     console.log(i);
// }

//2. Calculate the sum of all numbers from 1 to 100.
// let sum = 0;
// let nums = parseInt(prompt("enter the number:"))
// for(let i = 1; i<=nums; i++){
//     sum =sum + i;
// }
// console.log(sum);

//3. Print the multiplication table of a given number.
// let multi = 1;
// let nums = parseInt(prompt("enter a number:"));
// for(let i = 1; i<=10; i++){
//     multi = i * nums;
//     console.log(multi)
// }

//4. Write a program to print the Fibonacci series up to n terms.

// function fibonacci(n) {
//     let fibSeries = [0, 1];  // Start with the first two Fibonacci numbers
    
//     // Generate Fibonacci numbers up to the nth term
//     for (let i = 2; i < n; i++) {
//         let nextFib = fibSeries[i - 1] + fibSeries[i - 2];  // Calculate the next Fibonacci number
//         fibSeries.push(nextFib);  // Add the next Fibonacci number to the series
//     }
    
//     return fibSeries;
// }

// // Get user input for the number of terms
// let n = parseInt(prompt("Enter the number of terms for Fibonacci series:"));

// // Print Fibonacci series up to n terms
// console.log(`Fibonacci series up to ${n} terms:`);
// console.log(fibonacci(n));

//5. Write a program to check if a number is prime or not.

// function isPrime(Number){
//     if(Number < 2){
//         return false
//     }

//     for(let i = 2; i < Number; i++){
//         if(Number % 2 === 0){
//             return false
//         }
//     }
//     return true
// }
// let num = 13;
// console.log(`num is ${num}`)
// console.log(isPrime(13))

// function isPrime(number) {
//     // Check if number is less than 2 (0 and 1 are not prime)
//     if (number < 2) {
//         return false;
//     }
    
//     // Check if number is divisible by any integer from 2 to its square root
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false; // Number is divisible, not prime
//         }
//     }
    
//     return true; // Number is not divisible, prime
// }

// // Test the function with input value
// let num = 13;
// console.log(`Is ${num} prime?`);
// console.log(isPrime(num));

//6. Print the first 10 even numbers.

// let num = 10;
// for(let i =1; i<=num; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }

//7. Calculate the average of numbers in an array.

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let sum = 0;
// for(let i = 0 ; i< arr.length; i++){
//     sum = sum + arr[i];
// }

// console.log(sum);
// let calcAverage = sum / arr.length;
// console.log(calcAverage);

//8. Write a program to find the largest element in an array.
// let arr =[10,15,100,250,22];
// let max = arr[0];
// for(let i = 1; i<arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];
//     }
// }
// console.log("largest element :",max)

// let numbers = [10, 5, 20, 15, 30];

// // Initialize the maximum element to the first element of the array
// let maxElement = numbers[0];

// // Iterate through the array to find the largest element
// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > maxElement) {
//         maxElement = numbers[i]; // Update the maximum element if a larger element is found
//     }
// }

// // Print the largest element
// console.log("Largest element:", maxElement);

//9. Print the reverse of a given number.
// let arrNumber = [1,2,3,4,5,6,7];
// let reverseNum = [];
// for(let i = arrNumber.length - 1; i >=0; i--){
//     reverseNum.push(arrNumber [i] );
   
// }
// console.log(reverseNum);

//10. Calculate the factorial of a given number.
// let fact = 1;
// let num = 5;
// for (let i =1; i<=num; i++){
//     fact = fact * i;
// }
// console.log(fact)

//CONDITIONAL QUESTIONS
//11. Write a program to check if a given number is positive, negative, or zero.
// let num = parseInt(prompt("enter a number"));
// if(num>=0){
//     console.log("number is positive")
// }else if(num<0){
//     console.log("negative")
// }
// else{
//     console.log("number is o")
// }

//12. Check if a given year is a leap year or not. *******
// leap year/4 and 400 but not by 100
// let year = parseInt(prompt("enter year:"))
// if(year % 4 === 0 && year % 400 === 0 ){
//     console.log("Leap year")
// }
// else if(year % 100!== 0 ){
//     console.log(" not Leap year")
// }
// else{
//     console.log("dont know which year it is")
// }

//13.Find the maximum of three numbers.
// let a = 10;
// let b = 20;
// let c = 30;

// if(a>b && a>c){
//     console.log("a is grater then b and c")
// }else if(b>a && b>c){
//     console.log("b is grater then a and c")
// }else{
//     console.log("c is grater ")
// }

//14.Write a program to check if a character is a vowel or consonant.*********
//a,e,i,o,u
// Function to check if a character is a vowel or consonant
// function checkCharType(character) {
//     // Convert the character to lowercase to handle both uppercase and lowercase characters
//     character = character.toLowerCase();

//     // Check if the character is a vowel or a consonant
//     if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
//         return character + " is a vowel";
//     } else if (/^[a-z]$/.test(character)) {
//         return character + " is a consonant";
//     } else {
//         return "Invalid input: " + character;
//     }
// }

// // Test the function with some characters
// console.log(checkCharType('a')); // Output: a is a vowel
// console.log(checkCharType('b')); // Output: b is a consonant
// console.log(checkCharType('4')); // Output: Invalid input: 4

//15. Determine if a given number is odd or even.
// let num = parseInt(prompt("enter a number:"));
// if(num % 2===0){
//     console.log("number is even")
// }else{
//     console.log("number is odd")
// }

//16.Find the largest among three numbers using nested if-else.

//17. Write a program to find the roots of a quadratic equation.

// function findRoots(a, b, c) {
//     // Calculate the discriminant
//     let discriminant = b * b - 4 * a * c;
    
//     // If the discriminant is positive, the equation has two real roots
//     if (discriminant > 0) {
//         let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//         let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//         return [root1, root2];
//     } 
//     // If the discriminant is zero, the equation has one real root (repeated)
//     else if (discriminant === 0) {
//         let root = -b / (2 * a);
//         return [root];
//     } 
//     // If the discriminant is negative, the equation has two complex roots
//     else {
//         let realPart = -b / (2 * a);
//         let imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
//         return [realPart + ' + ' + imaginaryPart + 'i', realPart + ' - ' + imaginaryPart + 'i'];
//     }
// }

// // Test the function with coefficients of the quadratic equation
// let a = 1, b = -3, c = 2; // Example: x^2 - 3x + 2 = 0
// console.log("Roots:", findRoots(a, b, c)); // Output: [2, 1]

//18. Check if a given number is a palindrome.

// function isPalindrome(number) {
//     // Convert the number to a string to easily reverse it
//     let originalString = number.toString();
//     let reversedString = originalString.split('').reverse().join('');

//     // Check if the original number is equal to its reversed version
//     return originalString === reversedString;
// }

// // Test the function with some numbers
// console.log("Is 12321 a palindrome?", isPalindrome(12321)); // Output: true
// console.log("Is 12345 a palindrome?", isPalindrome(12345)); // Output: false

//19. Determine the grade of a student based on marks.
// let grade = Number(prompt("enter a number:"))
// if(grade > 90 && grade<=100){
//     console.log("A")
// }else if(grade >80 && grade<=90){
//     console.log("B")
// }else if(grade >60 && grade<=70){
//     console.log("C")
// }else if(grade >50 && grade<=60){
//     console.log("D")
// }else{
//     console.log("pass")
// }
//20. Calculate the electricity bill based on units consumed.
// function calculateElectricityBill(unitsConsumed) {
//     let rateFirstTier = 5;   // Rate for the first 100 units ($5 per unit)
//     let rateSecondTier = 7;  // Rate for the next 200 units ($7 per unit)
//     let rateThirdTier = 10;  // Rate beyond 300 units ($10 per unit)

//     let bill = 0;

//     // Calculate bill for the first 100 units
//     if (unitsConsumed <= 100) {
//         bill += unitsConsumed * rateFirstTier;
//     } else {
//         bill += 100 * rateFirstTier;

//         // Calculate bill for the next 200 units
//         if (unitsConsumed <= 300) {
//             bill += (unitsConsumed - 100) * rateSecondTier;
//         } else {
//             bill += 200 * rateSecondTier;

//             // Calculate bill for units beyond 300
//             bill += (unitsConsumed - 300) * rateThirdTier;
//         }
//     }

//     return bill;
// }

// // Test the function with some units consumed
// console.log("Electricity bill for 50 units:", calculateElectricityBill(50));   // Output: 250
// console.log("Electricity bill for 150 units:", calculateElectricityBill(150)); // Output: 1100
// console.log("Electricity bill for 350 units:", calculateElectricityBill(350)); // Output: 2850

//Arrays:
//21. Write a program to find the sum of all elements in an array.
// let arr = [1,2,3,4,5,6,7];
// let sum = 0;
// for(let i = 0; i<arr.length; i++){
//     sum = sum + arr[i];
// }
// console.log(sum);

//22. Find the second largest element in an array.
// Array of numbers
// let numbers = [10, 5, 20, 15, 30];

// // Initialize variables to store the largest and second largest elements
// let largest = -Infinity;
// let secondLargest = -Infinity;

// // Iterate through the array to find the largest and second largest elements
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//         secondLargest = largest; // Update second largest to previous largest
//         largest = numbers[i];    // Update largest to current element
//     } else if (numbers[i] > secondLargest && numbers[i] !== largest) {
//         secondLargest = numbers[i]; // Update second largest if current element is greater than previous second largest
//     }
// }

// // Print the second largest element
// console.log("Second largest element:", secondLargest);

//OR

// // Array of numbers
// let numbers = [10, 5, 20, 15, 30];

// // Sort the array in descending order
// numbers.sort((a, b) => b - a);

// // The second largest element will be at index 1 after sorting
// let secondLargest = numbers[1];

// // Print the second largest element
// console.log("Second largest element:", secondLargest);


// function validAnagram(first, second) {
//   if (first.length !== second.length) {
//     return false;
//   }

//   const lookup = {};

//   for (let i = 0; i < first.length; i++) {
//     let letter = first[i];
//     // if letter exists, increment, otherwise set to 1
//    // lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
//    //the above line wrote using ternary op. we can write the same line using if-else
//       if (lookup[letter]) {
//         lookup[letter] += 1;
//        } else {
//         lookup[letter] = 1;
//     }

//   }
//   console.log(lookup)

//   for (let i = 0; i < second.length; i++) {
//     let letter = second[i];
//     // can't find letter or letter is zero then it's not an anagram
//     if (!lookup[letter]) {
//       return false;
//     } else {
//       lookup[letter] -= 1;
//     }
//   }

//   return true;
// }

// // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
// validAnagram('anagrams', 'nagaramm')

