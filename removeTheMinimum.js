function removeSmallest(numbers) {
    var smallest;
    var newNums = [];
    numbers.forEach(function(num) {
      if (smallest > num || smallest === undefined) {
        smallest = num;
      }
    });
    var index = numbers.indexOf(smallest);
    numbers.forEach(function(n, i) {
      if (i !== index) {
        newNums.push(n);
      }
    });
    return newNums;
  }
console.log(removeSmallest([1, 2, 3, 4, 5]));
console.log(removeSmallest([5, 3, 2, 1, 4]));
console.log(removeSmallest([2, 2, 1, 2, 1]));
console.log(removeSmallest([]));
