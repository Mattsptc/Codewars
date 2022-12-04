function persistence(num) {
    let counter = 0
    let digits = num.toString().split('')

    while ( digits.length > 1) {
        let results = 1
        for(let i = 0; i < digits.length; i++) {
            results = results * digits[i]
        }

        digits = results.toString().split('');
        counter = counter + 1
    }


return counter


 }


console.log(persistence(39));
console.log(persistence(4));
console.log(persistence(25));
console.log(persistence(999));