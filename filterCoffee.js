function search(budget, prices) {
   return prices.sort((a, b)=> a-b).filter(price=>price<=budget)+''
  } 


console.log(search(3, [6, 1, 2, 9, 2]))
