function sum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i]
    } return sum
}
    
    // args.reduce((acc, arg) => acc += arg)

  console.log( sum(5, 7, 9))//, 21 )
  console.log( sum(12, 1, 1, 1, 1)) //, 16 )
  console.log( sum(12, 1, 1, 1, 1, 1, 1))//, 18 )