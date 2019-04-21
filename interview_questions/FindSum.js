// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// Niave T = O(n^2) S = O(1)
// function twoSum(nums, target) {
//   for(let i = 0; i < nums.length; i++){
//     for(let j = i+1; j < nums.length; j++){
//       if(nums[i] + nums[j] === target) {
//           return [i, j]
//       }
//     }
//   }
// }

// Better T = O(n) S = O(n)
function twoSum(arr, target) {
  let obj = {}
  for (var i = 0; i < arr.length; i++) {
    obj[arr[i]] = i
  }
  for (var i = 0; i < arr.length; i++) {
    let diff = target - arr[i]
    if (obj[diff] && obj[diff] !== i) {
      return [i, obj[diff]]
    }
  }
}

// Even better T = O(n) S = O(n) 
// function twoSum(array, target) {
//   const numsMap = new Map()
//   for (let i = 0; i < array.length; i++) {
//     if(numsMap.has(target - array[i])) {
//       return [numsMap.get(target - array[i], i)]
//       // get() returns a specified element associated with the specified key from the Map object.
//     } else {
//       numsMap.set(array[i], i)
//       //  set() adds or updates an element with a specified key and value to a Map object.
//     }
//   }
// }
console.log(twoSum([2, 7, 11, 15], 9));