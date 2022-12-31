function flattenAndSort(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            result.push(array[i][j])
        }
    } return result.sort((a, b) => { return a - b})
}
  console.log(flattenAndSort([[], []])) //, []);
  console.log(flattenAndSort([[], [1]])) //, [1]);
  console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5, 111]])) //, [1, 2, 3, 4, 5, 6, 7, 8, 9]);