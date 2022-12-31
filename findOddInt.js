function findOdd(A) {
    let freqObj = {}

    for (let i = 0; i < A.length; i++) {
        if (freqObj[A[i]]) {
            freqObj[A[i]] += 1
        } else {
            freqObj[A[i]] = 1
        }
    } 
    for (let key in freqObj) {
        if (freqObj[key] % 2 == 1) {
            return Number(key)
        }
    }

}

  console.log(findOdd([7]))
  console.log(findOdd([1, 1, 2]))
  console.log(findOdd([0, 1, 0, 1, 0]))
