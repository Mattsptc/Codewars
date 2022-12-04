function highAndLow(numbers){
    let string = numbers.split(" ")
    console.log(string)
    string.forEach(num => {
       parseInt(num)
       arr.push(parseInt(num))
       
    }) 
    let lowest = Math.min(...arr)
    let highest = Math.max(...arr)
    return `${highest} ${lowest}`
  }


console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))
console.log(highAndLow("1 2 3"))