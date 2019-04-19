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

  extractMax() {
    const max = this.values[0],
          end = this.values.pop() 
    if(this.values.length > 0) {
      this.values[0] = end 
      this.bubbleDown()
    }
    return max 
  }

  bubbleDown() {
    let index = 0,
        length = this.values.length,
        element = this.values[0] 
        while(true) {
          let leftChildIndex = 2 * index + 1,
              rightChildIndex = 2 * index + 2,
              leftChild, rightChild,
              swap = null 

              if(leftChildIndex < length) {
                leftChild = this.values[leftChildIndex] 
                if(leftChild > element) {
                  swap = leftChildIndex
                }
              }

              if(rightChildIndex < length) {
                rightChild = this.values[rightChildIndex]
                if(
                  (swap === null && rightChild > element) || 
                  (swap !== null && rightChild > leftChild)) {
                    swap = rightChildIndex
                }
              }

              if(swap === null) break 
              this.values[index] = this.values[swap] 
              this.values[swap] = element 
              index = swap 
        }
  }
}

const heap = new MaxBinaryHeap() 
heap.insert(55)
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
