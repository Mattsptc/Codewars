function sumArray(array) {
    if (!array || array.length < 2) {
      return 0
    } else {  array.sort((a, b) => { return a - b});
            let total = 0
            for (let i = 1; i < array.length -1; i++) {
              total += array[i]
            }
            return total
  }
  
}
console.log( sumArray([ 0, 1, 6, 10, 10 ]))//      , 17 );
console.log( sumArray([ -6, -20, -1, -10, -12 ]))//, -28 );
console.log( sumArray([ -6, 20, -1, 10, -12 ]) )// , 3 );