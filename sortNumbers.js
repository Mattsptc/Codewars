function solution(nums){
if (nums === [] || nums === null) {
    return []
} else {
    const compareNumbers = (a, b) => {
        return a - b;
      }
      return nums.sort(compareNumbers)
      
    }
}


console.log(solution([1, 2, 3, 10, 5]))
console.log(solution([20, 2, 10]))
console.log(solution([2, 20, 10]))
console.log(solution([]))
console.log(solution(null))