var maxSubArray =  function (nums){
    let curMax = nums[0];
    let maxima = nums[0];
    
    for(let i =1; i<nums.length; i++){
        curMax = Math.max(nums[i], curMax + nums[i])
        maxima = Math.max(maxima,curMax);
    }
    return maxima;
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))