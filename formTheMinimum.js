function minValue(values){
    let sorted = values.sort((a, b) => {return a - b})
    let unique = [... new Set(sorted)]
    return parseInt(unique.join(''))
  }
  


  console.log(minValue([1, 3, 1])) //, 13);
  console.log(minValue([4, 7, 5, 7])) //, 457);
  console.log(minValue([4, 8, 1, 4])) //, 148);
  console.log(minValue([5, 7, 9, 5, 7])) //, 579);
  console.log(minValue([6, 7, 8, 7, 6, 6])) //, 678);
  console.log(minValue([5, 6, 9, 9, 7, 6, 4])) //, 45679);