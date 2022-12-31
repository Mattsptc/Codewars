function getDivisorsCnt(n){
    let count = 0
   for (let i = n; i > 0; i--) {
    if (n % i === 0) {
        count++
    }
   } return count

}

console.log(getDivisorsCnt(54))