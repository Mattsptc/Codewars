function oddOrEven(array) {
     let sum = array.reduce((acc, number) => acc + number, 0)
     if (sum % 2 == 0) {
        return 'even'
     } else {
        return 'odd'
     }
 }


 console.log(oddOrEven([0]))
 console.log(oddOrEven([1]))
 console.log(oddOrEven([0, 1, 5]))
 console.log(oddOrEven([1023, 1, 2]))
 console.log(oddOrEven([0, 1, 4]))
 console.log(oddOrEven([0, 2, 3]))
 console.log(oddOrEven([0, -1, -4]))
 console.log(oddOrEven([0, -2, -3]))