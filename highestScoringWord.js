function high(words) {

    const alpha = ' abcdefghijklmnopqrstuvwxyz';
    const score = word => word.split('').reduce((a, b) => a + alpha.indexOf(b), 0)


    return words
    .split(' ')
    .map((word, pos) => ({word: word, pos: pos, score: score(word)}))
    .sort((a, b) => a.score - b.score || b.pos - a.pos)
    .pop()
    .word
  }

console.log(high('man i need a taxi up to ubud'))//, 'taxi');
console.log(high('what time are we climbing up the volcano'))//, 'volcano'); 
console.log(high('take me to semynak'))//, 'semynak');   
console.log(high('aa b'))//, 'aa');