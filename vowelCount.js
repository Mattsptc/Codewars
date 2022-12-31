function getCount(str) {
    let count = 0
    let letters = str.toLowerCase().split("")
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] == 'a'|| letters[i] == 'e' || letters[i] == 'i' || letters[i] == 'o' || letters[i] == 'u') {
            count++
        }
    } return count
  }
 // ou usando regex

 function getCount1(str) {
    return str.replace(/[^aeiou]/gi, '').length
  }

  console.log(getCount('abracadabra'))//5
  console.log(getCount('japanese'))// 4
  console.log(getCount1('abracadabra'))//5
  console.log(getCount1('japanese'))// 4