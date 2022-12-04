function numberJoy(n) {
    let string = n.toString()
    let numberArr = string.split('')
    let numberNum = numberArr.map(str => {
        return Number(str)
    })
    let sum = numberNum.reduce( (prevValue, elem) => 
    prevValue + elem, 0)
 /*    return sum */
    let sumToString = sum.toString().split('').reverse().join('')
    let reverseSum = Number(sumToString)
/*     return typeof reverseSum */
    let multiply = sum * reverseSum
    if (multiply === n) {
        return true
    } else {
        return false
    }
}

console.log(numberJoy(1997)),// false, 'Not a Harshad number')
console.log(numberJoy(1998)), //false, 'Harshad but digit sum=27, and 27x72 does not equal 1998')
console.log(numberJoy(1729)), //true, 'Harshad and digit sum=19, and 19x91 = 1729')
console.log(numberJoy(18)), //false, 'Harshad but digit sum=9, and 9x9 does not equal 18')
console.log(numberJoy(1)), //true, "It was correct")
console.log(numberJoy(81)), //true, "It was correct")
console.log(numberJoy(1458)) //true, "It was correct")