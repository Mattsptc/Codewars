function isPalindrome(x) {
    let toLower = x.toLowerCase()
    let reversed = x.split('').reverse().join('').toLowerCase()
    if (reversed == toLower) {
        return true
    } else {
        return false
    }
  }


  console.log(isPalindrome('a'))
  console.log(isPalindrome('abba'))
  console.log(isPalindrome('avestruz'))
  console.log(isPalindrome('abBa'))