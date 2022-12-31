function index(array, n){
    if (n >= array.length) {
        return -1
    } else {
        return array[n] ** n
    }
    
  }


console.log(index([1, 3, 10, 100],3))//,1000000);
console.log(index([1, 2],3))//,-1);
console.log(index([1,1,1,1,1,1,1,1,1,1], 9))//,1);
console.log(index([1,1,1,1,1,1,1,1,1,2], 9))//,512);