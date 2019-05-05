function pivot(arr, start=0, end=arr.length+1){
  const swap = (array, i, j) => {
      [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  let pivot = arr[start]
  let swapIndx = start

  for(let i = start+1; i < arr.length; i++){
      if(pivot > arr[i]){
          swapIndx++
          swap(arr, swapIndx, i)
      }
  }
  swap(arr, start, swapIndx)
  return swapIndx
}

function quickSort(arr, left = 0, right = arr.length -1){
  if(left < right) {
      let pivotIndex = pivot(arr, left, right) 
      // left
      quickSort(arr, left, pivotIndex-1)
      // right
      quickSort(arr, pivotIndex+1, right) 
  }
  return arr 
}

console.log(quickSort([100,-4,4,6,9,1,2,5,3]))