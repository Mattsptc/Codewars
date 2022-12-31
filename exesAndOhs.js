function XO(str) {
    let string = str.toLowerCase()
    let xCount = 0
    let oCount = 0

    for (let i = 0; i < string.length; i++) {
        if (string[i] == 'o') {
            oCount++
        } else if (string[i] == 'x') {
            xCount++
        }

    } 
    if (oCount == 0 && xCount == 0) {
        return true
    }
    else if (xCount == oCount) {
        return true
    } else {
        return false
    }
}

console.log(XO('Xas'))