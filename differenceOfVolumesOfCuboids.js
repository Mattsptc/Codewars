function findDifference(a, b) {
    let reducedA = a.reduce((total, acc) => acc * total)
    let reducedB = b.reduce((total, acc) => acc * total)
    return Math.abs(reducedA - reducedB)
  }

  console.log(findDifference([3, 2, 5], [1, 4, 4])) //, 14);
  console.log(findDifference([9, 7, 2], [5, 2, 2])) //, 106);
  console.log(findDifference([11, 2, 5], [1, 10, 8])) //, 30);
  console.log(findDifference([4, 4, 7], [3, 9, 3])) //, 31);