//check sum zero problem
//time complexity o(n^2)

// function sumZero (arr){
//    // for(let i = 0; i < arr.length - 1; i++){
//     for(let i of arr){
//         for(let j = 1; j<arr.length; j++){
//             if(i + arr[j] === 0){
//                 return [i, arr[j]]
//             }
//         }
//     }
// }
// const sumZeroOutput = sumZero([-5,-4,-3,-2,0,2,3,4,6]);
// console.log(sumZeroOutput)

function sumZeroOptimized (array){
    let left = 0;
    let right = array.length - 1;

    while(left < right){
        sum = array[left] + array [right];
        if(sum === 0){
            return [array[left] , array[right]]
        }
        else if (sum > 0) {
            right -- 
        }
        else{
             left ++
        }
    }
}
const output = sumZeroOptimized([-5,-4,-3,-2,0,2,3,4,6]);
console.log(output)