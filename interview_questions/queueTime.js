// There is a queue for the self-checkout tills at the supermarket. 
// Calculate the total time required for all the customers to check out!

function queueTime(customers, n) {
  const tills = Array(n).fill(0)

  customers.forEach(customer => {
    const nextTill = tills.indexOf(Math.min(...tills))
    tills[nextTill] += customer 
  })
  return Math.max(...tills) 
}

console.log(queueTime([1,2,3,4,5], 2))