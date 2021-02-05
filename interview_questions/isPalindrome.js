function isPalindrome(str, i1=0, i2=str.length - 1){
  if (str.length < 2) return true
  if (i1 >= i2) return true
  return str[i1] !== str[i2] ? false : isPalindrome(str, i1 + 1, i2 - 1)
}

console.log(isPalindrome('amanaplanacanalpanama'))