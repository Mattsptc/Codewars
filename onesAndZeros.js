const binaryArrayToNumber = arr => {
    let array = arr.join('')
    let num =  parseInt(array, 2)
    return num
  };

console.log(binaryArrayToNumber([ 1, 1, 1, 1]))