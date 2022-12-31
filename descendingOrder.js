function descendingOrder(n){
    let array = [n]
    let string = array.toString().split('')
    var realDigits = string.map(Number)
    return parseInt(realDigits.sort((a, b) => b - a).join(''))
  }

  console.log(descendingOrder(0))
  console.log(descendingOrder(111))
  console.log(descendingOrder(121))
  console.log(descendingOrder(149))