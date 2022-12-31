function sortByLength (array) {
    let sorted = array.sort((a, b) => {return a.length - b.length})
    return sorted
  };

  // ou

  function sortByLength1 (array) {
    return array.sort((a, b) => a.length - b.length)
  }


  console.log(sortByLength(["Beg", "Life", "I", "To"]))//,["I", "To", "Beg", "Life"])
  console.log(sortByLength1(["Beg", "Life", "I", "To"]))//,["I", "To", "Beg", "Life"])