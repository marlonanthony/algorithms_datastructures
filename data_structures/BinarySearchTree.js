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

  DFSPreOrder(node = this.root, data = []) {
    data.push(node.value) 
    node.left && this.DFSPreOrder(node.left, data) 
    node.right && this.DFSPreOrder(node.right, data) 
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

  maxDepth(root){
    let answer = 0
    function recurse(r, depth){
      if (!r) return 
      if (!r.left && !r.right) return answer = Math.max(answer, depth)
      recurse(r.left, depth + 1)
      recurse(r.right, depth + 1)
    }
    recurse(root, 1)
    return answer
  }

  treePaths(root, path='', arrOfPaths=[]){
    if (!root) return arrOfPaths
    path += root.value
    if (!root.left && !root.right){
      arrOfPaths.push(path)
      return
    }
    if (root.left) this.treePaths(root.left, path + '->', arrOfPaths)
    if (root.right) this.treePaths(root.right, path + '->', arrOfPaths)
    return arrOfPaths
  }
  
  printBorder(root, data=[]){
    if (!root) return
    data.push(root.value)
    if (root.left) printLeft(root.left)
    if (root.right) printRight(root.right)

    function printLeft(node){
      data.push(node.value)
      if (node.left) printLeft(node.left)
      if (node.right) printCenter(node.right)
    }
    function printRight(node){
      if (node.left) printCenter(node.left)
      if (node.right) printRight(node.right)
      data.push(node.value)
    }
    function printCenter(node){
      if (!node.left && !node.right) data.push(node.value)
      if (node.left) printCenter(node.left)
      if (node.right) printCenter(node.right)
    }
    return data
  }
}

//              10
//         6        15
//       3  8     13  20
//              11
const tree = new BinarySearchTree() 
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(20)
tree.insert(3)
tree.insert(8)
tree.insert(13)
tree.insert(11)
console.log(tree.DFSPreOrder())
console.log(tree.DFSPostOrder())
console.log(tree.DFSInOrder())
console.log(tree.maxDepth(tree.root))
console.log(tree.treePaths(tree.root))
console.log(tree.printBorder(tree.root))