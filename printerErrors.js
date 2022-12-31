function printerError(s) {
    let total = s.length
    let countLetter = 0
    for (let index in s) {
        if(s[index] > 'm') {
            countLetter++
        }
    }  return `${countLetter}/${total}`
}


console.log(printerError("aaabbbbhaijjjm"))
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"))
console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))