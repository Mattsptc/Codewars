function duplicateEncode(word){
    let small = word.toLowerCase()
    let letters = small.split('')
    let counts = letters.reduce((count, letter) => { 
        count[letter] = (count[letter] || 0) + 1; 
        return count; 
      }, {}); 
      return letters.map((letter) => { 
        return counts[letter] > 1 ? ')' : '('; 
      }).join(''); 
}
console.log(duplicateEncode("din")) // "(((");
console.log(duplicateEncode("recede")) // "()()()");
console.log(duplicateEncode("Success")) // ")())())","should ignore case");
console.log(duplicateEncode("(( @")) // "))((");