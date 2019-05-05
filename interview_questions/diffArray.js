function diffArray(arr1, arr2) {
  if(arr1.length > arr2.length) {
    return arr1.filter(val => !arr2.includes(val)) 
  }
  return arr2.filter(val => !arr1.includes(val))
}

console.log(diffArray([1,2,3,4,5,6], [1,2,3,4,5]))