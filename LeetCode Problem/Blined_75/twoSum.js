//nums =[2,7,8,11,15] , target = 9
//o(n^2)
// var two_Sum = function (nums , target){
//     for( let i = 0; i < nums.length; i++){
//         for(let j = i+1; j<nums.length; j++){
//            if(nums [i] + nums[j] === target){
//             return [i,j]
//            }
//         }

//     }
//     return -1
// }
// console.log(two_Sum([2,7,8,11,15],19));

//better solution
var two_Sum = function (nums, target){
     jadooKaPitara = {}
     for(let index = 0; index<nums.length; index++){
        var remaingValue = target - nums[index];
        if(remaingValue in jadooKaPitara){
            return [jadooKaPitara[remaingValue], index]
      }
      jadooKaPitara [nums[index]] = index;

    }
         
}
console.log(two_Sum([2,7,8,11,15],19));