//238. product of array except self


var productExceptSelf = function(nums) {
    let prefixProductArray = [];
    let suffixProductArray = [];
    let resultArr = []; 

    prefixProductArray.push(1); 
    for (let index = 1; index < nums.length; index++) { // O(n) --> prefix ka skeletal structure banane ke liye
        prefixProductArray.push(0); // 1 0 0 0 0 0
    }

    for (let index = 0; index < nums.length - 1; index++) { // O(n) --> suffix ka skeletal structure banane ke liye
        suffixProductArray.push(0);
    }    
    suffixProductArray.push(1); // 0 0 0 0 0 1

    for (let index = 1; index < nums.length; index++) { // O(n)--> prefix array ko populate karne ke liye
        prefixProductArray[index] = prefixProductArray[index - 1] * nums[index - 1]; 
    }

    for (let index = nums.length - 2; index >= 0; index--) { // O(n)--> suffix array ko populate karne ke liye
        suffixProductArray[index] = suffixProductArray[index + 1] * nums[index + 1]; 
    }

    for (let index = 0; index < nums.length; index++) { // O(n) --> result array find ke liye
        resultArr[index] = prefixProductArray[index] * suffixProductArray[index];
    }

    // The overall time complexity of this approach is O(n) + O(n) + O(n) + O(n) + O(n) ~ O(5 * n) ~ O(n)
    // O(c * n) ~ O(n)

    return resultArr; 
};

console.log(productExceptSelf([1,2,3,4]));

//  1 [-1,   1,  0,  -3, 3] 1
//    O(2 * n), O(3 * n) ~ O(n) space complexity, O(n) time complexity

//     The size of these arrays === the size of the original array
//     prefixProductArray = [1     -1      -1      0       0] --> O(n)
//     suffixProductArray = [0      0      -9       3       1] --> O(n)
//     resultArr          = [0      0       9       0       0] --> O(n) 
 
//     To solve in O(n):
//     1. Space complexity par compromise maarna padega
//     2. Prefix product & suffix product

