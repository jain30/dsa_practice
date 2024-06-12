//contains duplicate(LeetCode 217 - Easy Problem)
// var duplicateNumber = function(nums){
//     for (let i = 0; i<nums.length; i++){
//         for(let j =i+1; j<nums.length ; j++){
//             if(nums[i] === nums[j]){
//                 return true
//             }
//         }
//     }
//     return -1
// }

// console.log(duplicateNumber([1,2,3,3,1]))

// var duplicateNumber = function(nums){
//     nums.sort();
//     for(let i = 0; i<nums.length; i++){
//         if(nums[i] === nums [i+1]){
//             return true
//         }
//     }
//     return -1
// }
// console.log(duplicateNumber([1,2,3]))

// var duplicateNumber = function(nums){
//     const hashSet = new Set();
//     for(let i =0; i<nums.length; i++){
//         const number = nums[i]
//         if(hashSet.has(number)){
//             return true
//         }
//         else{
//             hashSet.add(number)
//         }
//     }
//     return false
// }
// console.log(duplicateNumber([1,2,3,4,5,15,3]))