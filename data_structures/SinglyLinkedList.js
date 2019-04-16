class Node {
  constructor(val){
      this.val = val
      this.next = null 
  }
}

class SinglyLinkedList {
  constructor(){
      this.head = null
      this.tail = null
      this.length = 0
  }
  push(val){
    let newNode = new Node(val)  
    if(!this.head){
        this.head = newNode 
        this.tail = this.head 
    } else {
    this.tail.next = newNode 
    this.tail = newNode  
    }
    this.length += 1
    return this 
  }

  pop(){
    if(!this.head) return undefined
    let current = this.head,
        newTail = current 
    
    while(current.next){
      newTail = current 
      current = current.next 
    }
    this.tail = newTail 
    this.tail.next = null 
    this.length --
    if(this.length === 0){
      this.head = null
      this.tail = null 
    }
    return current 
  }

  shift(){
    if(!this.head) return undefined
    let oldHead = this.head
    this.head = oldHead.next 
    this.length --
    if(this.length === 0){
      this.tail = null 
    }
    return oldHead
  }

  unshift(val){
    let newNode = new Node(val) 
    if(!this.head){
      this.head = newNode
      this.tail = newNode 
    } else {
      newNode.next = this.head 
      this.head = newNode 
    }
    this.length ++
    return this 
  }

  get(index){
    if(index < 0 || index >= this.length) return undefined
    let count = 0,
        current = this.head 
    while(count !== index){
      current = current.next 
      count++
    }
    return current 
  }

  set(val, index){
    let node = this.get(index)
    if(!node) return false 
    node.val = val 
    return true 
  }

  insert(val, index){
    if(index < 0 || index > this.length) return false 
    if(index === this.length) return !!this.push(val) 
    if(index === 0) return !!this.unshift(val) 
  
    let newNode = new Node(val),
        previousNode = this.get(index - 1),
        temp = previousNode.next    
    previousNode.next = newNode
    newNode.next = temp 
    this.length++
    return true 
  }

  remove(index){
    if(index < 0 || index >= this.length) return undefined
    if(index === this.length - 1) return this.pop() 
    if(index === 0) return this.shift() 

    let prevNode = this.get(index - 1),
        removedNode = prevNode.next
    prevNode.next = removedNode.next 
    this.length--
    return removedNode
  }

  reverse(){
    let node = this.head 
    this.head = this.tail 
    this.tail = node 
    let prev = null,
        next

    for(let i = 0; i < this.length; i++){
      next = node.next 
      node.next = prev 
      prev = node 
      node = next 
    }
    return this 
  }

  print(){
    const arr = []
    let current = this.head 
  
    while(current){
      arr.push(current.val)
      current = current.next 
    }
    console.log(arr) 
  }
}

var list = new SinglyLinkedList()
list.push('Hello')
list.push('world')
list.push('we')
list.push('gonna')
list.push('party')
list.push('like')
list.push('it\'s')
list.push(1999)
console.log(list)