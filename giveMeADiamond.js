function diamond(n){
    let firstHalf = []
    if (n < 0 || n % 2 == 0) {
        return null
    } else {
        for ( let i = 0; i < (n-1)/2; i++) {
            firstHalf.push(" ".repeat(((n-1)/2) -i) + "*".repeat(i * 2 + 1) + "\n")
        }
        return [...firstHalf, "*".repeat(n) + "\n", ...firstHalf.reverse()].join('')
    }
  
  }


  console.log(diamond(0))
  console.log(diamond(2))
  console.log(diamond(-2))
/*   console.log(diamond(1)) */
  console.log(diamond(5))
/*   console.log(diamond(5)) */