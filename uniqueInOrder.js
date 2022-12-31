let uniqueInOrder = (unique) => {
   /*  let split = unique.split('') */
    let result = []
    for (let i = 0; i < unique.length; i++) {
        if (unique[i] !== unique[i+1]) {
            result.push(unique[i])
        }
    } return result

}

console.log(uniqueInOrder('AAAABBBCCCDAABBB'))
console.log(uniqueInOrder('ABBcCAD'))