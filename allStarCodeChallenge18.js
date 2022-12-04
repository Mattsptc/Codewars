function strCount(str, letter) {
    let arr = str.split("");
    //console.log(arr)
    let finalArr = arr.filter((char) => letter === char);
    //console.log(finalArr);
    return finalArr.length;
  }

  console.log(strCount('hello', 'o'))