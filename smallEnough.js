function smallEnough(a, limit){
    let passed = []
    for(let i = 0; i < a.length; i++) {
        if (a[i] > limit) {
            passed.push(a[i])
        }
    } if (passed.length > 0) {
        return false
    } else { return true }
}


console.log(smallEnough([66, 101], 200)) //, true);
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)) //, false);
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107)) //, true);