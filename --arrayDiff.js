function arrayDiff(a, b) {
  var result = [];
  for (var n of a) {
    if (!b.includes(n)) {
        result.push(n)
    }
  } return result
}

console.log(arrayDiff([1,2,2], [1]))//, [2,2], "a was [1,2,2], b was [1]");
console.log(arrayDiff([1,2,2], [2]))//, [1], "a was [1,2,2], b was [2]");
console.log(arrayDiff([1,2,2], []))//, [1,2,2], "a was [1,2,2], b was []");