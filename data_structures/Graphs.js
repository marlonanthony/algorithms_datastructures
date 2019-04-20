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
    console.log([vertex1, vertex2])
  }

  removeVertex(vertex) {
    while(this.adjacencyList[vertex].length) {
      const iteration = this.adjacencyList[vertex].pop()
      this.removeEdge(vertex, iteration) 
    }
    delete this.adjacencyList[vertex] 
  }
}

let graph = new Graph()
graph.addVertex('Tokyo')
graph.addVertex('San Francisco')
graph.addVertex('Austin') 
graph.addVertex('Portland') 
graph.addEdge('San Francisco', 'Austin')
graph.addEdge('Tokyo', 'Austin')
graph.addEdge('Tokyo', 'San Francisco')
graph.addEdge('Portland', 'San Francisco')
graph.removeVertex('San Francisco')
// graph.removeEdge('San Francisco', 'Austin')
console.log(graph) 