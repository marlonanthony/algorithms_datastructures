// Given an arr, return a matrix such that the subarrays contain all permutations of the arr.
function permutations(arr){
  if (!arr.length) return [ [] ]
  const first = arr[0]
  const rest = arr.slice(1)
  const withoutFirst = permutations(rest)
  const withFirst = []

  withoutFirst.forEach(perm => {
    for (let i = 0; i <= perm.length; i++){
      withFirst.push([...perm.slice(0, i), first, ...perm.slice(i)])
    }
  })

  return withFirst
}

console.log(permutations(['a', 'b', 'c']))