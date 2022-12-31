const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    let range = mpg * fuelLeft
    let result = range - distanceToPump
    if (result < 0 ) {
        return false
    } else {
        return true
    }
  };

  console.log(zeroFuel(50, 25, 2))
  console.log(zeroFuel(100, 50, 1))