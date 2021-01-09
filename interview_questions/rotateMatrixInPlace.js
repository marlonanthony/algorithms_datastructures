// Given a square matrix and the number of row/cols (n), rotate the matrix in place
function rotate(matrix, n){
  for (let layer = 0; layer < n/2; layer++){
      let first = layer,
          last = n - layer - 1

      for (let i = first; i < last; i++){
          let offset = i - first
          // save top
          let top = matrix[first][i]
          // left -> top
          matrix[first][i] = matrix[last - offset][first]
          // bottom -> left
          matrix[last - offset][first] = matrix[last][last - offset]
          // right -> bottom
          matrix[last][last - offset] = matrix[i][last]
          // top -> right
          matrix[i][last] = top
      }
  }
  console.log(matrix)
}

console.log('before')
console.log([
  ['a', 'b', 'c', 'd', 'e'],
  ['f', 'g', 'h', 'i', 'j'],
  ['k', 'l', 'm', 'n', 'o'],
  ['p', 'q', 'r', 's', 't'],
  ['u', 'v', 'w', 'x', 'y']
])
console.log('\nafter')
rotate([
  ['a', 'b', 'c', 'd', 'e'],
  ['f', 'g', 'h', 'i', 'j'],
  ['k', 'l', 'm', 'n', 'o'],
  ['p', 'q', 'r', 's', 't'],
  ['u', 'v', 'w', 'x', 'y']
], 5)