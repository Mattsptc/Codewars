var number = function(busStops){
    let totalPeople = 0
    for(let i = 0; i < busStops.length; i++) {
        let currStop = busStops[i]
        let getOn = currStop[0]
        let getOff = currStop[1]
        totalPeople += getOn;
        totalPeople -= getOff;
    }
    return totalPeople
  }

console.log(number([[10,0],[3,5],[5,8]]))