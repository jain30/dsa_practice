// price =[7,2,3,5,6]
//BROUTE FORCE APPROACH: 

// var maxProfit = function (price){
//     var maxProfitVal = Number.MIN_VALUE;
//     for(let i = 0; i<price.length; i++){
//         for(let j = i+1; j<price.length; j++){
//             let profit = price[j] - price[i];
//             if(profit > maxProfitVal){
//                 maxProfitVal = profit;
//             }
//         }
//     } return maxProfitVal
// }
// console.log(maxProfit([7,1,5,3,6,4]));


// let maxProfit = function(price){
//     let maxProfitValue = Number.NEGATIVE_INFINITY;
//     for( let i = 0; i< price.length; i++){
//         for(let j = i+1; j<price.length; j++){
//             let maxPrice = price[j]-price[i];
//             if(maxPrice > maxProfitValue){
//                 maxProfitValue = maxPrice;
//             }
//         }
//     } return maxProfitValue;
// }
// let stockCell = maxProfit([7,1,5,3,6,4]);
// console.log(stockCell);


// var maxProfit = function(price) {
//     var maxProfitVal = Number.NEGATIVE_INFINITY; // Correct initialization
//     for (let i = 0; i < price.length; i++) {
//         for (let j = i + 1; j < price.length; j++) {
//             let profit = price[j] - price[i];
//             if (profit > maxProfitVal) {
//                 maxProfitVal = profit;
//             }
//         }
//     }
//     return maxProfitVal;
// }
// console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5

//OPTIMIZED SOLUTION:
// var maxProfit = function(price){
//     let maximumOverallProfit = Number.MIN_VALUE;
//     let minmumStockPriceEncounterdTillNow = Number.MAX_VALUE;
//     let currentProfitEarned = 0;
//     for(let index = 0; index < price.length; index++){
//         let currentStockPrice = price[index];
    
//     if(currentStockPrice < minmumStockPriceEncounterdTillNow){
//         minmumStockPriceEncounterdTillNow = currentStockPrice ;
//     }
//     currentProfitEarned = currentStockPrice - minmumStockPriceEncounterdTillNow;
//     if(currentProfitEarned < maximumOverallProfit){
//         maximumOverallProfit =currentProfitEarned;
//     }
//   }
//     return maximumOverallProfit;
// }

// console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5


var maxProfit = function(prices) {
   
    let maximumOverallProfit = Number.MIN_VALUE; // this is the result
    let minimumStockPriceEncounteredTillNow = Number.MAX_VALUE; // this variable tracks the min SP encountered till date
    let currentProfitEarned = 0; // agar mei aaj hi stock bech dun, toh zyaada se zyaada kitna kama lunga

    for (let index = 0; index < prices.length; index++) {
        let currentStockPrice = prices[index]; 

        // Abhi tak jitne stock price mene dekhe hein, kya aaj ka stock price unn sabse chhota hei?
        if (currentStockPrice < minimumStockPriceEncounteredTillNow) { 
            minimumStockPriceEncounteredTillNow = currentStockPrice; 
        }

        // Agar mei itni intelligent hun ki sabse kum stock price mei mene khareed liya hota, toh aaj bechne par kitna kama lungi?
        currentProfitEarned = currentStockPrice - minimumStockPriceEncounteredTillNow; 
        if (currentProfitEarned > maximumOverallProfit) {
            maximumOverallProfit = currentProfitEarned;
        }
    }

    return maximumOverallProfit;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));