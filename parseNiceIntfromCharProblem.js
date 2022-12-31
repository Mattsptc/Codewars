function getAge(inputString){
    let age = inputString[0]
    return Number(age)
    }

    // outra solucao

function getAge2(inputString) {
    return parseInt(inputString[0])
}
console.log(getAge('9 years old'))
console.log(getAge('4 years old'))
console.log(getAge2('8 years old'))