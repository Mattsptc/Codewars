function arithmetic(a, b, operator){
    if (operator == "add") {
        return a + b 
    } else if (operator == "subtract") {
        return a - b
    } else if (operator == "multiply") {
        return a * b
    } else if (operator == "divide") {
        return a / b
    }

}


  console.log(arithmetic(1, 2, "add"))//, 3, "'add' should return the two numbers added together!");
  console.log(arithmetic(8, 2, "subtract")) //, 6, "'subtract' should return a minus b!");
  console.log(arithmetic(5, 2, "multiply")) //, 10, "'multiply' should return a multiplied by b!");
  console.log(arithmetic(8, 2, "divide")) //, 4, "'divide' should return a divided by b!");