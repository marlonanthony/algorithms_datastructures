// print the binary of given base10 number

function printBinary(n, str = '') {
  if(n < 2) str += Math.trunc(n)
  else {
    let rest = n / 2,
        last = Math.trunc(n % 2)
    str += last
    return printBinary(rest, str)
  }
  return +str.split('').reverse().join('')
}
console.log(printBinary(42))