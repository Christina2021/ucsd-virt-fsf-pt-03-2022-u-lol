var generate = function(numRows) {
    
    let newArr = []

    for (let i = 0; i < numRows; i++) {

        const row = [1]
        const previous = newArr[i-1]
        
        for (let j = 0; j < i-1; j++) {
            let a = previous[j]
            let b = previous[j+1]
            row.push(a+b)
        }

        if (i !== 0) {
            row.push(1)
        }

        newArr.push(row)

    }

    return newArr;

};

console.log(generate(3))
console.log(generate(4))
console.log(generate(5))
console.log(generate(6))
