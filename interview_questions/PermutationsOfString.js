function permutationsOfString(string) {

  function recur(string, prefix) {
      if (string.length === 0) {
          return [prefix];
      } else {
          let out = [];
          for (let i = 0; i < string.length; i++) {
              let pre = string.substring(0, i);
              let post = string.substring(i + 1);
              out = out.concat(recur(pre + post, string[i] + prefix))
              console.log(out) 
          }
          return out;
      }
  }
  const distinct = {};
  recur(string, "").forEach(function(result) {
      distinct[result] = true
  })
  return Object.keys(distinct)
}

permutationsOfString('marlon')








// function permutationsOfString(string) {
//   const arr = string.split('')
//   let permutations = [] 

//   function swap(a,b) {
//     console.log(a,b)
//     let temp = arr[a] 
//     arr[a] = arr[b] 
//     arr[b] = temp 
//   }

//   function generate(n) {
//     if(n === 1) {
//       console.log(permutations = permutations.concat(arr.join('')))
//     } else {
//       for(let i = 0; i !== n; i++) {
//         generate(n - 1) 
//         swap(n % 2 ? 0 : i, n - 1) 
//       }
//     }
//   }
//   generate(arr.length) 
//   return permutations.join('')
// permutationsOfString('marlon')