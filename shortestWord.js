function findShort(str){
    let partesDaFrase = str.split(' ')
    const lengthOfWords = partesDaFrase.map(string => {return string.length})
    return Math.min(...lengthOfWords)
}

console.log(findShort('josepio e um cara bem legal'))

//solucao que eu pensei
function findShort(s){
    var arr = s.split(' ');
    var smallest = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if(arr[i].length < smallest.length){
        smallest = arr[i];
      }
    }
    return smallest.length;
  }