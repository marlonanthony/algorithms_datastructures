// Given an array of characters, return a matrix where the subarrays contain all combinations of the array
function combinations(arr){
  if (!arr.length) return [[]]
  const first = arr[0],
        rest = arr.slice(1),
        withoutFirst = combinations(rest),
        withFirst = []

  withoutFirst.forEach(comb => {
      withFirst.push([...comb, first])
  })

  return [...withoutFirst, ...withFirst]
}

console.log(combinations(['a', 'b', 'c']))