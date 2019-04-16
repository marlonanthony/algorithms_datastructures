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
}

var list = new DoublyLinkedList()
list.push(10)
list.push(11)
list.push(12)
list.shift() 
// list.pop()
console.log(list) 
