function naiveSearch(long, short) {
  let count = 0
  for(let i = 0; i < long.length; i++) {
      for(let j = 0; j < short.length; j++) {
          console.log(long[i+j], short[j])
          if(long[i+j] !== short[j]) {
              console.log('BREAK')
              break
          }
          if(j === short.length - 1) {
              console.log('found one')
              count++
          }
      }
  }
  return count 
}

naiveSearch('marlon anthony decosta', 'on')