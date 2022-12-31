function minMax(arr){
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    let array = []
    array.push(min)
    array.push(max)
    return array
  }


  console.log(minMax([1, 2, 3, 4, 5]))
  console.log(minMax([22222, 5]))
  console.log(minMax([5]))