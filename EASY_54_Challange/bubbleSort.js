//bubble sort compare two values at a time: [3,2,4,1,6,5]=> [3,2] then new array [2,3,4,1,6,5], [3,4]......so on

function bubbleSort(nums){
    for(let i = 0; i<nums.length - 1; i++){
        for(j = 0; j < nums.length; j++){
            if(nums[j] > nums[j+1]){
                [nums[j],nums[j+1]] = [nums[j+1],nums[j]]
            }
        }
    }
    return nums;
}
console.log(bubbleSort([3,2,4,1,6,5]))