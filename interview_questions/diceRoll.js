function diceRoll(dice, arr = []) {
  if(dice === 0) console.log(arr) 
  else {
    for(let i = 1; i <= 6; i++) {
      arr.push(i) 
      diceRoll(dice - 1, arr) 
      arr.pop() 
    }
  }
}

diceRoll(3)