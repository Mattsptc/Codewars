var humanYearsCatYearsDogYears = function(humanYears) {
    let human = humanYears
    let catYears = 0
    let dogYears = 0
    let first2 = 24
    let yearCat = 24
    let yearDog = 24
    if (human == 1) {
        catYears+=15
        dogYears+=15
    } else if (human == 2) {
        catYears+=24
       
        dogYears+=24

    } else if (human >= 3) {
        for (let index = 2; index < human; index++) {
        catYears = yearCat+=4
        dogYears = yearDog+=5
            
        }
        
    }
    return [human,catYears,dogYears];
  }
  

console.log(humanYearsCatYearsDogYears(10))