function solution(string) {
    var newString = ''
    for (letter of string) {
        if (letter == letter.toUpperCase()) {
            newString += ' '
            newString += letter;
        } else {
            newString += letter
        }
    } return newString
}

console.log(solution('camelCasing')) //'camel Casing', 'Unexpected result')
console.log(solution('camelCasingTest')) //'camel Casing Test', 'Unexpected result')