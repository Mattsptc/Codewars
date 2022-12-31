function mergeArrays(arr1, arr2) {
  let mixArr = [...arr1, ...arr2].sort((a, b) => { return a - b})
  let uniqueArr = [...new Set(mixArr)]
  return uniqueArr
}



console.log(mergeArrays([-21,-22,3,4], [5,6,7,8])) //, [1,2,3,4,5,6,7,8], "Basic tests");
console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12])) //, [1,2,3,4,5,7,9,10,11,12], "Basic tests");
