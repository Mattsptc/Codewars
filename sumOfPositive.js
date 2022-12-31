function positiveSum(arr) {
    negative = []
    positive = arr.filter(a => a > 0 || (negative.push(a), false))
    if (positive.length == 0) {
        return 0
    } else return positive.reduce((acc, number) => { return acc += number}, 0)
}

console.log(positiveSum([1,-2,3,4,5])) //,13);
console.log(positiveSum([])) //,0);
console.log(positiveSum([-1,-2,-3,-4,-5]))//,0);