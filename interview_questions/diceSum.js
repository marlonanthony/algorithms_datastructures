function diceSum(dice, desiredSum, sumSoFar, arr = []) {
  if(dice === 0) console.log(arr) 
  else {
    for(let i = 1; i <= 6; i++) {
      if(sumSoFar + i + 1*(dice - 1) <= desiredSum &&
         sumSoFar + i + 6*(dice - 1) >= desiredSum) { 
        arr.push(i) 
        diceSum(dice - 1, desiredSum, sumSoFar + i, arr) 
        arr.pop() 
      }
    }
  }
}
diceSum(3, 15, 0)