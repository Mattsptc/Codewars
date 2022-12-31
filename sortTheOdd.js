function sortArray(array) {
  let oddSort = array.filter((elem) => elem % 2 != 0).sort((a, b) => a - b)
  return array.map(e => e % 2 ? oddSort.shift() : e)
  }

console.log(sortArray([5, 3, 2, 8, 1, 4])) //, [1, 3, 2, 8, 5, 4]);
console.log(sortArray([5, 3, 1, 8, 0])) //, [1, 3, 5, 8, 0]);