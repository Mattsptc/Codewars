function sumDigits(number) {
    if (number == 0) {
        return 0
    }
    if (number > 0) {
        let string = number.toString().split('')
        let numberNum = string.map(str => {
            return Number(str)
        })
        let sum = numberNum.reduce( (prevValue, elem) => 
        prevValue + elem, 0)
        return sum
    } if (number < 0) {
        let string = number.toString().split('')
        string.shift()
        let numberNum = string.map(str => {
            return Number(str)
        })
        let sum = numberNum.reduce( (prevValue, elem) => 
        prevValue + elem, 0)
        return sum
    }


}

console.log(sumDigits(10))
console.log(sumDigits(99))
console.log(sumDigits(-32))

