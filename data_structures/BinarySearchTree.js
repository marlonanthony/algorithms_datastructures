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

  BFS() {
    let node = this.root,
          data = [],
          queue = []
          
    queue.push(node) 
    while(queue.length) {
      node = queue.shift()
      data.push(node.value) 
      node.left && queue.push(node.left) 
      node.right && queue.push(node.right) 
    }
    return data 
  }

  DFSPreOrder() {
    const data = []
    function traverse(node) {
      data.push(node.value) 
      node.left && traverse(node.left) 
      node.right && traverse(node.right) 
    }
    traverse(this.root) 
    return data 
  }

  DFSPostOrder(){
    const data = []
    function traverse(node) {
      node.left && traverse(node.left) 
      node.right && traverse(node.right) 
      data.push(node.value) 
    }
    traverse(this.root) 
    return data 
  }

  DFSInOrder() {
    const data = []
    function traverse(node) {
      node.left && traverse(node.left) 
      data.push(node.value) 
      node.right && traverse(node.right) 
    }
    traverse(this.root) 
    return data 
  }
}

const tree = new BinarySearchTree() 
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(20)
tree.insert(3)
tree.insert(8)
console.log(tree.DFSPreOrder())
console.log(tree.DFSPostOrder())
console.log(tree.DFSInOrder())