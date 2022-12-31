function squareSum(numbers){
    if (!numbers || numbers.length < 1) {
        return 0
    } else {
        array = numbers.map(((number) => number**2))
        let sum = array.reduce((acc, number) => acc + number, 0)
        return sum
    }
}

console.log(squareSum([1, 2]))
console.log(squareSum([0, 3, 4, 5]))
console.log(squareSum([]))