function countLargestSum (arr,num){
    if(num>arr.length){
        throw new Error("num can not larger then the array")
    }
    else{
        let max = 0;
        for(let i = 0; i<arr.length - num + 1; i++){
            let temp = 0
            for(let j = 0; j<num; j++){
                 temp += arr[i + j]
                // console.log(`checking purpose ${temp}`)
            }
            if(temp>max){
                max = temp
            }
        }
        return max
    }
}
const result = countLargestSum([1,2,3,4,5,4,6,8,7,3],4)
console.log(result)