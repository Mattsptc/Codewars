function digPow(n, p){
    var str = n.toString()
    var res = 0;
    
    for(var i=0; i<str.length; i++){
      res += Math.pow(parseInt(str[i]),p++); 
    }
    
    return res%n === 0 ? res/n : -1;
  }


console.log(digPow(89, 1))//, 1)
console.log(digPow(92, 1))//, -1)
console.log(digPow(46288, 3))//, 51)