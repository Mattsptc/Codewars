function enough(cap, on, wait) {
    let spaceFree = cap - on
    let total = spaceFree - wait
    if (total > 0) {
        return 0
    } else if (total <= 0) {
        return Math.abs(total)
    }
  }


  console.log(enough(10, 5, 5))//, 0);
  console.log(enough(100, 60, 50))//, 10);
  console.log(enough(20, 5, 5))//, 0);