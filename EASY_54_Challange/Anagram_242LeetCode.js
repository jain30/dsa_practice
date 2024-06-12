// using map: time compexity o(n)
// var anagramCheck = function(string1, string2){
//     if(string1.length !== string2.length){
//         return false;
//     }
//     let counter = {};
//     for(let letter of string1){
//         counter[letter] = (counter[letter] || 0) +1;
//         console.log(counter[letter]);
//     }

//     for(let items of string2){
//         if(!counter[items]){
//             console.log("for thired L")
//             return false
//         }
//         counter[items] -=1;
//     }
//     return true;

// }
// const check = anagramCheck("hello", "elllh")
// console.log(check);

function isAnagram (string1, string2){
    if(string1.length !== string2.length){
        return false
    }
    let counter = {}
    for(let letter of string1){
        counter[letter] = (counter[letter] || 0) +1
        console.log(counter[letter])
    }

    for(let item of string2){
        if(!counter[item]){
            console.log("missing l")
            return false
        }
        counter[item] -=1
    }
   return true;
}
const output = isAnagram('hello','llleo')
console.log(output)



















