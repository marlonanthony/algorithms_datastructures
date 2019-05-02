function binarySearch(arr, elem) {
  let start = 0,
      end = arr.length - 1,
      middle = Math.floor((start + end) / 2)
  while(arr[middle] !== elem && start <= end) {
      if(elem < arr[middle]) end = middle - 1
      else start = middle + 1
      middle = Math.floor((start + end) / 2)
  }
  return arr[middle] === elem ? middle : -1
}

binarySearch([1, 3, 4, 8, 9, 15, 30, 43, 48, 55, 59, 61, 68, 75, 88], 55)