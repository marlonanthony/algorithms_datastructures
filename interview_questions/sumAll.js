function sumAll(arr) {
  let min = Math.min(...arr),
      max = Math.max(...arr),
      array = []

  for(let i = min; i <= max; i++) {
    array.push(i) 
  }
  return array.reduce((acc, cur) => acc + cur) 
}

console.log(sumAll([1,5]))