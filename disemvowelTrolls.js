function disemvowel(str) {
    let noVowel = str.replace(/o|a|e|i|u/gim, '')
    return noVowel;
  }

  console.log(disemvowel('This website is for losers LOL'))
  console.log(disemvowel('No offense but, \n  your writing is among the worst'))