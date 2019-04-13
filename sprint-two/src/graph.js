

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
 
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  
  this.storage[node] = [];
 
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.storage[node]) return true;
  else return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.storage[node];
  
  for (var key in this.storage) {
    var thisNode = this.storage[key];
    for (var i = 0; i < thisNode.length; i++) {
      if(thisNode[i] === node) {
        thisNode.splice(i,1);
      }
    } 
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
var keyOne = this.storage[fromNode];
var output  = false;
  for (var i = 0; i < keyOne.length; i++ ) {
    if (keyOne[i] === toNode) output = true; 
  }
  return output
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  
  
  var keyOne = this.storage[fromNode];
  var keyTwo = this.storage[toNode];
  
  for (var i = 0; i < keyOne.length; i++ ) {
    if (keyOne[i] === toNode) {
      keyOne.splice(i, 1);
    }
  }
  
  for (var i = 0; i < keyTwo.length; i++) {
    if (keyTwo[i] === fromNode) {
      keyTwo.splice(i, 1);
    }
  }
}

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.storage) {
    cb(node)
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


