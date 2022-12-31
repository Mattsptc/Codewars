function alphabetPosition(text) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    
    return text.toLowerCase()
               .split('')
               .filter(t => letters.indexOf(t) > -1)
               .map(t => letters.indexOf(t)+1 || '')
               .join(' ');
  }

console.log(alphabetPosition("The sunset sets at twelve o' clock."))//, "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
console.log(alphabetPosition("The narwhal bacons at midnight.")) //, "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9