function checkForFactor (base, factor) {
    return base % factor == 0 ? true : false;
  }


  console.log(checkForFactor(2450,5))//, true)
  console.log(checkForFactor(24612,3))//, true)
  console.log(checkForFactor(9,2))//, false)
  console.log(checkForFactor(653,7))//, false)