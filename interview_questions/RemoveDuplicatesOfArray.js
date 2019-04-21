// Remove dups in place

function removeDuplicates(nums) {
  let n = 0,
      c = 1
  while(c < nums.length) {
    if(nums[c] === nums[n]){
      c++
    } else {
      n++
      nums[n] = nums[c]
    }
  }
  return n + 1
}

console.log(removeDuplicates([1,1,2]))