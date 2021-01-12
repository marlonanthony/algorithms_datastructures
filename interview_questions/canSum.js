// Write a function that takes in a target and an array of numbers as args.
// The function should return a boolean indicating whether or not it is possible to 
// generate the target using numbers from the array.
// You may use an element of the array as many times as needed.
// You may assume that all input numbers are nonnegative.
function canSum(target, nums, memo={}){
  if (target in memo) return memo[target]
  if (target === 0) return true
  if (target < 0) return false

  for (let num of nums){
    const remainder = target - num
    if (canSum(remainder, nums, memo)){
      memo[target] = true
      return true
    }
  }
  memo[target] = false
  return false
}

console.log(canSum(7, [2,3]))
console.log(canSum(7, [5,3,4,7]))
console.log(canSum(7, [2,4]))
console.log(canSum(8, [2,3,5]))
console.log(canSum(300, [7,14]))