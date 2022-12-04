function removeEveryOther(arr){
    return arr.filter((_,index) => index % 2 == 0)
   
  }

 removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']