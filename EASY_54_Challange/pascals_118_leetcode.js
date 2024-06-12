var generate = function (numRow){
    if(numRow < 1) return [];
    if(numRow === 1) return [[1]];

    const triangle = [[1]];

    for( let i = 1; i<numRow; i++){
        let prevRow = triangle [i-1]
        const curRow = [];
        curRow.push(1);

        for(j = 1; j<prevRow.length; j++){
            curRow[j] = prevRow[j] + prevRow[j-1]
        }
        curRow.push(1)
        triangle.push(curRow)
    }
    return triangle
}

let numRow = 5;
console.log(generate(numRow))