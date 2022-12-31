function queueTime(customers, n) {
    if (!customers || customers.length < 1) {
        return 0
    }
    let arrays = new Array(n).fill(0)
    for (let totalTime of customers) {
        let idx = arrays.indexOf(Math.min(...arrays))
        arrays[idx] += totalTime
    }
    return Math.max(...arrays)
  }


  console.log(queueTime([1,2,3,4], 1))//, 10);
  console.log(queueTime([2,2,3,3,4,4], 2))//, 9);
  console.log(queueTime([1,2,3,4,5], 100))//, 5);
  console.log(queueTime([10,2,3,3], 2)) //, 10);