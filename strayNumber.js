function stray(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let found = false;
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[j] === numbers[i] && i != j) {
                found = true;
                break;
            }
        }
        if (!found) return numbers[i];
    }
};


console.log(stray([1, 1, 1, 1, 3, 1]))
console.log(stray([2, 2, 2, 2, 2, 2, 13, 2, 2, 2]))
console.log(stray([12, 2, 2, 2, 2, 2, 2, 2, 2, 2]))