function longest(s1, s2) {
  let newArray = [...s1, ...s2]
  let uniq = [...new Set(newArray)]
  let longest = uniq.sort()
  return longest.join('')
  }


console.log(longest("aretheyhere", "yestheyarehere"))
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"))
