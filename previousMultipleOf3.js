const prevMultOfThree = n => {
  let arr = n.toString().split('')

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; i++) {
      let sum = arr.join('')
      if ( sum % 3 === 0) return parseInt(sum)
      arr.pop()
    }
  } return null
}


console.log(prevMultOfThree(25))
console.log(prevMultOfThree(36))
console.log(prevMultOfThree(12))
console.log(prevMultOfThree(952306))
console.log(prevMultOfThree(25))