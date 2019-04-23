function largestSquare(matrix) {
  const cache = JSON.parse(JSON.stringify(matrix)) 
  let result = 0

  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(i === 0 || j === 0) { }
      else if(matrix[i][j] > 0) {
        cache[i][j] = 1 + Math.min(cache[i][j-1], cache[i-1][j], cache[i-1][j-1])
      } 
      if(cache[i][j] > result) result = cache[i][j]
    }
  }
  return result 
}

console.log(largestSquare(
              [[1,1,0,1,0],
               [0,1,1,1,0],
               [1,1,1,1,0],
               [0,1,1,1,1]]))