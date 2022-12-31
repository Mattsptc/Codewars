function firstNonConsecutive(arr) {
    let fnc = arr.find((x, y) => x !== y + arr[0])
    return Number.isInteger(fnc) ? fnc : null
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7]));
console.log(firstNonConsecutive([1]));
console.log(firstNonConsecutive([1, 2, 3, 4, 5, 6, 7]));
