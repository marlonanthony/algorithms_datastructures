// Write a function that takes in a target and an array of numbers as args.
// The function should return an array containing any combination of elements that add up to exactly the target.
// If there is no combination that adds up to the target, then return null.
// If there are multiple combinations possible, you may return any single one.
function howSum(target, nums, memo={}){
  if (target in memo) return memo[target]
  if (target === 0) return []
  if (target < 0) return null

  for (let num of nums){
    const remainder = target - num,
      remainderResult = howSum(remainder, nums, memo)
    if (remainderResult){
      memo[target] = [...remainderResult, num]
      return memo[target]
    }
  }
  memo[target] = null
  return null
}

console.log(howSum(7, [2,3]))
console.log(howSum(7, [5,3,4]))
console.log(howSum(7, [2,4]))
console.log(howSum(8, [2,3,5]))
console.log(howSum(300, [7,14]))