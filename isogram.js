function isIsogram(str) {
    const words = str.trim().toLowerCase().split('')
    const obj = {}

    for (let word of words) {
        const firstLetter = word[0]
        if(obj[firstLetter]){
            obj[firstLetter]++
        } else {
            obj[firstLetter] = 1
        }
    } 
    const repeatedValues = Object.values(obj).filter((count) => count > 1)
 
    if (repeatedValues.length == 0) {
        return true
    } else {
        return false 
    }

}

console.log(isIsogram('dermatoglyphics'))
console.log(isIsogram("isogram"))
console.log(isIsogram('josese'))