class MaxBinaryHeap {
  constructor() {
    this.values = [41,39,33,18,27,12]
  }

  insert(val) {
    this.values.push(val) 
    this.bubbleUp()
  }

  bubbleUp() {
    let index = this.values.length - 1
    const element = this.values[index] 
    while(index > 0) {
      let parentIndex = Math.floor((index - 1) / 2),
          parent = this.values[parentIndex]
      if(element <= parent) break 
      this.values[parentIndex] = element 
      this.values[index] = parent 
      index = parentIndex
    }
  }
}

const heap = new MaxBinaryHeap() 
heap.insert(55)
heap.insert(1)
heap.insert(45)
heap.insert(199)
console.log(heap)
