function addBinary(a, b) {
  let number = a + b;
    let num = number;
    let binary = (num % 2).toString();
    for (; num > 1; ) {
      num = parseInt(num / 2);
      binary = (num % 2) + binary;
    }
    console.log(typeof binary)
    console.log(a + ", " + b + " --> " + binary + " (" + a + " + " + b + " = " + number + " in decimal or " + binary + " in binary" + ")" );
  }

addBinary(1, 2);
addBinary(51, 12);

// SOLUCAO REFATORADA A
function addBinary2(a,b){
    return (a+b).toString(2)
}

console.log(addBinary2(1, 2))
console.log(addBinary2(51, 12))