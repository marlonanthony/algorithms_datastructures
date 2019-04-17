class Node {
  constructor(value) {
    this.value = value 
    this.left = null 
    this.right = null 
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null 
  }

  insert(val) {
    let newNode = new Node(val),
        current = this.root 
    
    if(!this.root) { 
      this.root = newNode 
      return this
    }

    while(true) {
      if(val === current.value) return null
      if(val < current.value) {
        if(current.left === null) {
          current.left = newNode
          return this 
        }
        current = current.left 
      } else {
        if(current.right === null) {
          current.right = newNode 
          return this 
        }
        current = current.right 
      }
    }
  }

  find(val) {
    let current = this.root,
        found = false  
    if(!this.root) return null 
    while(current && !found){
      if(val < current.value) {
        current = current.left 
      } else if(val > current.value) {
        current = current.right 
      } else {
        found = true 
      }
    }
    return current 
  }
}

const tree = new BinarySearchTree() 
tree.insert(10)
tree.insert(8)
tree.insert(20)
tree.insert(19)
tree.insert(4)
tree.insert(9)
tree.insert(18)
console.log(tree.find(19))
console.log(tree)