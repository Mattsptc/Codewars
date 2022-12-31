function betterThanAverage(classPoints, yourPoints) {
    const totalPoints = classPoints.reduce((acc, current) => acc + current)
    let average = Math.floor(totalPoints / classPoints.length)
    if (average >= yourPoints) {
        return false
    } else {
        return true
    }
  }
  

  console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50))
  
  console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21))