function basicOp(operation, value1, value2) {
  if (operation === "+") {
    console.log(value1 + value2);
  } else if (operation === "-") {
    console.log(value1 - value2);
  } else if (operation === "*") {
    console.log(value1 * value2);
  } else if (operation === "/") {
    console.log(value1 / value2);
  }
}

basicOp("+", 4, 7);
basicOp("-", 15, 18);
basicOp("*", 5, 5);
basicOp("/", 49, 7);
