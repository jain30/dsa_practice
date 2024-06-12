// Variables:

// Declare a variable name and assign it a string value.
// let myName = "Pooja";
// console.log(myName) 

// Declare two variables num1 and num2 and assign them numerical values. Calculate their sum and store it in another variable sum.
// Declare a constant variable PI and assign it the value of π (3.14).
// Declare a variable isRaining and assign it a boolean value.
// Declare a variable age and assign it your age.
// Declare a variable fruit and assign it an array of fruits.
// Declare a variable person and assign it an object with properties like name, age, and city.
// Declare a variable x and assign it a value of 5. Then reassign x to 10.
// Declare a variable balance and assign it a floating-point number representing your bank balance.
// Declare a variable isEmpty and assign it a null value.


// Loops:
// Write a for loop to iterate from 1 to 10 and log each number to the console.
// for (let i=1; i<=10; i++){
//     console.log(i)
// }

// Write a while loop to print even numbers from 0 to 20.
// let i = 0;
// while(i<=20){
//     if(i%2==0){
//         console.log(i)
//     }
//     i++;
// }

// Use a do-while loop to prompt the user for a number until they enter a valid number (between 1 and 10).

// Write a for loop to iterate over an array of names and log each name to the console.
// let arr = ["pooja","janvi","tanisha","priya","pavitra"]
// for (let i=0; i<=arr.length; i++){
//     console.log(arr[i]);
// }

// Use a for loop to calculate the sum of all numbers from 1 to 100.
// let sum = 0;
// for(let i = 0; i<=100; i++){
//     sum =sum + i;
// }
// console.log(`sum of 1 to 100 is : ${sum}`);

// Write a nested for loop to generate a multiplication table up to 10x10.
// let num = 11;
// let multi = 0;
// for(let i = 1; i<=10; i++){
//     multi = num * i;
//     console.log(multi);
// }

// Write a for loop to iterate over an array of numbers and log only the even numbers to the console.
// let arr = [10,23,26,11,22,14,7,35,36]

// for(let i = 0; i<=arr.length; i++){
//     if(arr [i] % 2 === 0){
//         console.log(arr[i]);
//     }
// }


// Use a while loop to find the factorial of a given number.

// let fact = 1;
// let num = parseInt(prompt("enter a number"));
// for (let i = 1; i<=num; i++){
//     fact = fact * i;
//     console.log(fact)
// }

// let num = 5;
// let fact = 1;
// let i = 2;
// while(i<=num){
//     fact = fact * i;
//     i++;
// }
// console.log(fact);
// Write a for loop to iterate over an array of objects and log each object's properties to the console.
// let obj = [ 
//          {firstName : "pooja",
//            lastName : "jain",
//            job : "software engineer",
//            location : "Gurgaon" }
//          ];

//            for(let i = 0; i<=obj.length; i++) {
//             const newObj = obj[i]
//              console.log(`object ${i+1} :`)
//              for ( const key in newObj) {
//                 console.log(`${key} : ${newObj[key]}`)
//              }
//            }



        //    let obj = [
        //     {
        //       firstName: "pooja",
        //       lastName: "jain",
        //       job: "software engineer",
        //       location: "Gurgaon"
        //     }
        //   ];
          
        //   for (let i = 0; i <= obj.length; i++) {
        //     const newObj = obj[i];
        //     console.log(`object ${i + 1} :`);
        //     for (const key in newObj) {
        //       console.log(`${key} : ${newObj[key]}`); // Access properties of the current object (newObj)
        //     }
        //   }
// Use a for loop to iterate over a string and count the number of vowels.
// let str = "Hello world";
// let vowelCount = 0;

// for(let i = 0; i<str.length; i++){
//     const char = str[i].toLowerCase();
//     if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
//         vowelCount++;
//     }
// }
// console.log(`vowel count is: ${vowelCount}`)

// Conditionals:
// Write an if statement to check if a number is positive, negative, or zero.

// Use a switch statement to determine the day of the week based on a given number (1 for Monday, 2 for Tuesday, etc.).
// Write an if-else statement to determine if a person is eligible to vote based on their age.
// Use nested if-else statements to determine the grade of a student based on their exam score.
// Write a function to check if a given year is a leap year.
// Write an if statement to check if a given string is a palindrome.
// Use a switch statement to convert a numerical grade to a letter grade (A, B, C, etc.).
// Write a function to determine if a given number is even or odd.
// Write an if-else statement to determine the largest of three numbers.
// Use conditional statements to determine the type of a triangle based on its sides.




//function: higher order function-> call back function

// function operate(a,b,operation){
//     return operation (a,b)
// }
// const add = (a,b) => (a+b);
// const sub = (a,b) => (a-b);

// console.log(operate(5,23,add));
// console.log(operate(25,5,sub));

// Addition Function:
// Write a function called addNumbers that takes two numbers as arguments and returns their sum.

// function addNumbers(a,b){
//     return a + b;
// }
// console.log(addNumbers(5,8))

// Subtraction Function:
// Write a function called subtractNumbers that takes two numbers as arguments and returns their difference.
// function subtractNumbers(a,b){
//     return a-b;
// }
// console.log(subtractNumbers(15,10));

// Multiplication Function:
// Write a function called multiplyNumbers that takes two numbers as arguments and returns their product.
// function multiplyNumbers(a,b){
//     return a*b;
// }
// console.log(multiplyNumbers(12,2));

// Greeting Function:
// Write a function called greet that takes a name as an argument and returns a greeting message.
//  If no name is provided, the function should default to greeting "Guest".

// const greet = function (name="guest"){
//     return name;
// }
// console.log(greet());
// console.log(greet("Pooja"))

// Higher-Order Function:
// Write a function called operate that takes three arguments: two numbers (a and b) and 
// a callback function (operation). This function should perform the operation specified by the callback 
// function on the two numbers and return the result.

// const operate = function(a,b,operation){
//     return operation(a,b);
// }

// const add = (a,b)=>(a+b);
// const subtr =(a,b)=>(a-b);

// console.log(operate(8,15,add));
// console.log(operate(15,12,subtr));


// Factorial Function:
// Write a function called factorial that calculates the factorial of a given number using recursion.
// function factorial(n){
//     if(n === 0 || n === 1){
//         return 1;
//     }
//     else{
//         return n * factorial(n-1);
//     }
// }

// console.log(factorial(5));


