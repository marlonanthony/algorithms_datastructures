let str = ''
function printBinary(n) {
  if(n < 2) console.log(str += Math.trunc(n))
  else {
    let rest = n / 2,
        last = Math.trunc(n % 2)
    console.log(str += last)
    // console.log(str)
    printBinary(rest)
  }
  return str.split('').reverse().join('')
}
console.log(printBinary(42))
// printBinary(2)
// printBinary(12)