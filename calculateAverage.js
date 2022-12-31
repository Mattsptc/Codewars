function findAverage(array) {
  if (!array || array.length < 1) {
    return 0;
  } else {
    let sum = array.reduce((acc, number) => acc + number, 0);
    return sum / array.length;
  }
}

console.log(findAverage([1, 1, 1])); //, 1);
console.log(findAverage([1, 2, 3])); //, 2);
console.log(findAverage([1, 2, 3, 4])); //, 2.5);
