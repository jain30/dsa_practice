// //
// function selectionShort (nums){
//     for(let i = 0; i<nums.length - 1; i++){
//         let minIndex = i;
//         for(let j = i+1; j<nums.length; j++){
//             if(nums[j]<nums[minIndex]){
//                 minIndex = j
//             }
//         }
//         [nums[i], nums[minIndex] = [nums[minIndex], nums[i]]];
//     }
//     return nums;
// }
// let nums = [2,4,3,6,5,1]
// console.log(selectionShort(nums))

function selectionSort(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j;  // Correct assignment
            }
        }
        // Swap elements at i and minIndex
        [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }
    return nums;
}

let nums = [2, 4, 3, 6, 5, 1];
console.log(selectionSort(nums));  // Corrected function name
