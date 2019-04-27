function isPalindrome(str) {
  if(str.length < 2) return true 
  else {
    console.log(str)
    str = str.split('')
    const first = str.shift(),
          last = str.pop()
    str = str.join('') 
    return first === last ? isPalindrome(str) : false
  }
}

console.log(isPalindrome('racecar'))