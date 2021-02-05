// Find all possible diceRolls for given dice count
function diceRoll(dice, arr=[], array=[]) {
  if(dice === 0) {
    array.push([...arr]) 
    return 
  }
  for(let i = 1; i <= 6; i++) {
    arr.push(i) 
    diceRoll(dice - 1, arr, array) 
    arr.pop() 
  }
  return array
}

console.log(diceRoll(3))