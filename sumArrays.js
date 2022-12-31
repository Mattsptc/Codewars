// Sum Numbers
function sum (numbers) {
    "use strict";
    if (!numbers || numbers.length < 1) {
        return 0
    } else {
        let arrReduced = numbers.reduce((acc, number) => acc + number, 0)
        return arrReduced
    }
    
};

console.log(sum([]))//, 0);
console.log(sum([1, 5.2, 4, 0, -1]))//, 9.2);