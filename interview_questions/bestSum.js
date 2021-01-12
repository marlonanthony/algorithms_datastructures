// Write a function that takes in a target and an array of numbers as args.
// The function should return an array containing the shortest
// combination of numbers that add up to exactly the target.
// If there is a tie for the shortest combination, you may 
// return any one of the shortest.
function bestSum(target, nums, memo={}){
  if (target in memo) return memo[target]
  if (target === 0) return []
  if (target < 0) return null

  let minWays = null

  for (let num of nums){
    const remainder = target - num,
      remainderResult = bestSum(remainder, nums, memo)

    if (remainderResult){
      const combination = [...remainderResult, num]
      if (!minWays || combination.length < minWays.length){
        minWays = combination
      }
    } 
  }
  memo[target] = minWays
  return minWays
}

console.log(bestSum(7, [5,3,4,7]))
console.log(bestSum(8, [2,3,5]))
console.log(bestSum(8, [1,4,5]))
console.log(bestSum(100, [1,2,5,25]))