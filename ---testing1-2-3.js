var number = function(array) {
    return array.map(function (line, index) {
      return (index + 1) + ": " + line;
    });
  }

  console.log(number([])) //, [], 'Empty array should return empty array');
  console.log(number(["a", "b", "c"])) //, ["1: a", "2: b", "3: c"], 'Return the correct line numbers');       