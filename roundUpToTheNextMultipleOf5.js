function roundToNext5(n){
    if (n % 5 != 0) {
        return Math.ceil(n / 5) * 5
    } else if (n % 5 == 0) {
        return n
    }
}


console.log(roundToNext5(-1))
console.log(roundToNext5(4))
console.log(roundToNext5(8))
console.log(roundToNext5(10))