function largestPairSum(numbers){
    numbers.sort(function(a, b){ return b - a });
    return numbers[0] + numbers[1];
  }
  
 largestPairSum[10,14,2,23,19]
  console.log(largestPairSum([-100,-29,-24,-19,19]));
  console.log(largestPairSum([1,2,3,4,6,-1,2]));
  console.log(largestPairSum([-10, -8, -16, -18, -19]));