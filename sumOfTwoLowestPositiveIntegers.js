function sumTwoSmallestNumbers(numbers) {  
    let sorted = numbers.sort((a, b) => a - b)
    let smallest = sorted.slice(0, 2)
    let sum = smallest.reduce((acc, number) => acc + number, 0)
    return sum
  }

  console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))//, 13 , "Sum should be 13");
  console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])) //, 6 , "Sum should be 6");