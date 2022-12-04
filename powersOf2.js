function powersOfTwo(n) {
    let array = [];
    for (let index = 0; index <= n; index++) 
        array[index] = 2**index;
        
        
   return array;
}
    

console.log(powersOfTwo(3))


/* function powersOfTwo(n){
    let arr = [];
    for(let i=0; i<=n; i++)
      arr[i] = 2**i;
    return arr;
  } */