//count unique no.

function countUniqueNo (Array){
     if(Array.length > 0){
       
     let i = 0
     for(let j = 1; j<Array.length; j++){
        if(Array[i] !== Array[j]){
            i++;
            Array[i] = Array[j]
        }
     }
     return i+1;
 }
 else{
    throw console.error("array is empty");
 }
}
const output =countUniqueNo ([1,1,2,2,2,3,4,5,6,6,7,7,8,8,9,9,11])
console.log(output)