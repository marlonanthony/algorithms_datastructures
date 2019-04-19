function arrOfInt(array) {
  const obj = {} 

  for(let i = 0; i < array.length; i++){
    const key = array[i]
    obj[key] = (obj[key] || 0) + 1
    if(obj[key] % 2 === 0) {
      delete obj[key] 
    }
  }
  return Object.keys(obj)[0]
}

console.log(arrOfInt([1,2,1,4,3,2,1,5,4,4,5,4,3]))

// Find the number with an odd amount of occurances in array 