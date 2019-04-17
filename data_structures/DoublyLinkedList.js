class Node {
  constructor(val) {
    this.val = val 
    this.next = null
    this.prev = null 
  }
}

class DoublyLinkedList {
  constructor(){
    this.head = null
    this.tail = null 
    this.length = 0 
  }

  push(val){
    let node = new Node(val) 
    if(!this.head){
      this.head = node 
      this.tail = node 
    } else {
      this.tail.next = node 
      node.prev = this.tail 
      this.tail = node 
    }
    this.length++
    return this
  }

  pop(){
    if(!this.head) return undefined
    let oldTail = this.tail 

    if(this.length === 1){
      this.head = null 
      this.tail = null 
    } else {
      this.tail = oldTail.prev 
      this.tail.next = null 
      oldTail.prev = null 
    }
    this.length--
    return oldTail
  }

  shift(){
    if(!this.head) return undefined
    let oldHead = this.head 

    if(this.length === 1){
      this.head = null 
      this.tail = null 
    } else {
      this.head = oldHead.next
      this.head.prev = null 
      oldHead.next = null 
    }
    this.length--
    return oldHead
  }

  unshift(val){
    let newNode = new Node(val)
    if(!this.head){
      this.head = newNode 
      this.tail = newNode    
    } else {
      this.head.prev = newNode
      newNode.next = this.head 
      this.head = newNode
    }
    this.length++
    return this 
  }

  get(index){
    if(index < 0 || index >= this.length) return null
    let count, current  
    if(index <= this.length / 2){
      count = 0
      current = this.head 
      while(count !== index){
        current = current.next
        count++
      } 
    } else {
      count = this.length - 1
      current = this.tail 
      while(count !== index){
        current = current.prev 
        count--
      }
    }
    return current 
  }

  set(val, index) {
    let node = this.get(index) 
    if(!node) return false 
    node.val = val 
    return true 
  }

  insert(val, index) {
    if(index < 0 || index > this.length) return false 
    if(index === 0) return !!this.unshift(val) 
    if(index === this.length) return !!this.push(val) 

    let newNode = new Node(val),
        prevNode = this.get(index - 1),
        movedNode = prevNode.next 
    prevNode.next = newNode, newNode.prev = prevNode
    newNode.next = movedNode, movedNode.prev = newNode
    this.length++
    return true 
  }

  remove(index) {
    if(index < 0 || index >= this.length) return null 
    if(index === 0) return this.shift() 
    if(index === this.length - 1) return this.pop() 

    let foundNode = this.get(index)
    foundNode.prev.next = foundNode.next 
    foundNode.next.prev = foundNode.prev  
    foundNode.prev = null, foundNode.next = null 
    this.length--
    return foundNode
  }
}

var list = new DoublyLinkedList()
list.push('Hagrid')
list.push('Harry')
list.push('Hermione')
list.push('Happy')
list.push('Angry')
console.log(list)
console.log(list.remove(3))  
console.log(list)