function bubbleSort(arr) {
  let noSwaps
  
  function swap(arr, a, b){
    let temp = arr[a] 
    arr[a] = arr[b] 
    arr[b] = temp 
  }

  for(let i = arr.length; i > 0; i--){
    noSwaps = true 
    for(let j = 0; j < i - 1; j++) {
      if(arr[j] > arr[j+1]) {
        swap(arr, arr[j], arr[j+1])
        noSwaps = false
      }
    }
    if(noSwaps) break 
  }
  return arr 
}

bubbleSort([3,15,8,6])