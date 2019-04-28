function binarySearchRecursive(arr, val, start, end) {
  let mid = Math.floor((start + end) / 2)
  if(val === arr[mid] || start > end) console.log(arr[mid]) 
  else if(val < arr[mid]){
    console.log(arr[mid])
    return binarySearchRecursive(arr, val, start, mid - 1)
  } else {
    console.log(arr[mid])
    return binarySearchRecursive(arr, val, mid+1, end)
  }
}

binarySearchRecursive([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 8, 0, 20)