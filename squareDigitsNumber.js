function squareDigits(num){
    //may the code be with you
    let number = '' + num;
    let newNum = new Array();
    number.split('').map(n => {
      newNum.push(n**2);
    })
    
    return parseInt(newNum.join(''));
  }

  console.log(squareDigits(123))