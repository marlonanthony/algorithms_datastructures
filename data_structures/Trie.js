class Node {
  constructor(char){
    this.char = char
    this.children = new Array(26)
    this.isWord = false
  }
}

class Trie {
  constructor(){
    this.root = new Node('\0')
  }
  // 0(n) Time 0(n) Space
  insert(word){
    let cur = this.root
    for (let i = 0; i < word.length; i++){
      const c = word[i]
      const childIndex = c.charCodeAt() - 'a'.charCodeAt()
      if (!cur.children[childIndex]) cur.children[childIndex] = new Node(c)
      cur = cur.children[childIndex] 
    }
    cur.isWord = true
  }
  // 0(n) Time 0(1) Space
  search(word){
    const node = this.getNode(word)
    return Boolean(node) && node.isWord
  }
  // 0(n) Time 0(1) Space
  startsWith(prefix){
    return Boolean(this.getNode(prefix))
  }
  getNode(word){
    let cur = this.root
    for (let i = 0; i < word.length; i++){
      const c = word[i] 
      const childIndex = c.charCodeAt() - 'a'.charCodeAt()
      if (!cur.children[childIndex]) return null
      cur = cur.children[childIndex]
    }
    return cur
  }
}

let trie = new Trie()
trie.insert('marlon')
trie.insert('themule')
trie.insert('mar')
console.log(trie)
console.log(trie.search('mar'))
console.log(trie.startsWith('z'))
console.log(trie.startsWith('marl'))
console.log(trie.search('themule'))