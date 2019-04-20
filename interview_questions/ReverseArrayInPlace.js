function reverseArray(arr) {
  let front = 0, 
      back = arr.length - 1
  
  while(front < back) {
    swap(arr, front, back) 
    console.log(front, back)
    front++
    back--
  }
  return arr
}

function swap(arr, front, back) {
  [ arr[front], arr[back] ] = [ arr[back], arr[front] ]
}

console.log(reverseArray([1,2,3,4,5,6,7,8,9,10,11]))
