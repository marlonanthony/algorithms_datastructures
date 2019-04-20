class Graph {
  constructor() {
    this.adjacencyList = {} 
  }
  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [] 
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
  }
  
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(val => val !== vertex2)
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(val => val !== vertex1) 
  }

  removeVertex(vertex) {
    while(this.adjacencyList[vertex].length) {
      const iteration = this.adjacencyList[vertex].pop()
      this.removeEdge(vertex, iteration) 
    }
    delete this.adjacencyList[vertex] 
  }

  DFTRecursive(start) {
    const results = [],
          visited = {},
          adjacencyList = this.adjacencyList;
    (function DFT(vertex) {
      if(!vertex) return null 
      visited[vertex] = true
      results.push(vertex) 
      adjacencyList[vertex].forEach(neighbor => {
        if(!visited[neighbor]) {
          return DFT(neighbor)
        }
      })
    })(start) 
    return results
  }

  DFTIterative(start) {
    let currentVertex 
    const stack = [start],
        results = [],
        visited = {}

    visited[start] = true 
    while(stack.length) {
      currentVertex = stack.pop()
      results.push(currentVertex) 
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]){
          visited[neighbor] = true 
          stack.push(neighbor) 
        }
      }) 
    }
    return results
  }

  BFT(vertex) {
    let currentVertex 
    const queue = [vertex],
          result = [],
          visited = {} 
          
    visited[vertex] = true 
    while(queue.length) {
      currentVertex = queue.shift() 
      result.push(currentVertex) 
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]) {
          visited[neighbor] = true 
          queue.push(neighbor) 
        }
      })
    }
    return result 
  }
}

const g = new Graph()
g.addVertex('A')
g.addVertex('B')
g.addVertex('C') 
g.addVertex('D') 
g.addVertex('E')
g.addVertex('F')
g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D') 
g.addEdge('C', 'E')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'F')
console.log(g.BFT('A'))