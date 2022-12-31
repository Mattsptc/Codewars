function getMiddle(s){
  let letters = s.split('')
  let middle = Math.floor(letters.length / 2) 
  let middleEven = Math.floor(letters.length / 2) -1
  let middlePlusEven = (letters.length / 2) 
  return letters.length % 2 == 0 ? letters[middleEven] + letters[middlePlusEven] : letters[middle]
}


console.log(getMiddle("test"))//,"es");
console.log(getMiddle("testing"))//,"t");
console.log(getMiddle("middle")) //,"dd");