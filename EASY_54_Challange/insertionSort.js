//in insertion sort we compare every value behind it like- we have array = [3,2,4,1,6,5] compare '2' with '3' , '4' with 3 and '2'

function insertionSort(nums){
    for(let i = 1; i<nums.length; i++){
        for(let j = i; j>=0; j--){
            if(nums[j] < nums[j-1]){
                [nums[j], nums[j-1]] = [nums[j-1], nums[j]];
            }
        }
    }
    return nums;
}
console.log(insertionSort([3,2,4,1,6,5]));