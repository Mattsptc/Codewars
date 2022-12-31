function isPangram(string){

    let letters = string.toLowerCase().split('')
    let alphabet = 'abcdefghijlmnopqrstuvxz'
    let alpLetters = alphabet.split('')
    for (const letter of letters) {
        for (let i = 0; i < alpLetters.length; i++) {
            if (letter === alpLetters[i]) alpLetters[i] = ''
        }
    } alpLetters = alpLetters.filter(value => value !== '')
    return !alpLetters.length == 1 ? true : false
  }


  console.log(isPangram("The quick brown fox jumps over the lazy dog."))
  console.log(isPangram("This is not a pangram."))