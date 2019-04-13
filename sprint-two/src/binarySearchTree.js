var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;
  
  
  // your code here
  //debugger;
  Object.assign(newTree, treeThings)
  return newTree;
};

var treeThings = {};

treeThings.insert = function(node) {
    console.log("before:", this)
 
  let newNode = new Node(node);
     console.log("test:", (this.newNode.left))
  if (node > this.newNode.left) {
    this.left = newNode;
  }
console.log("after:", this)

}

treeThings.contains = function() {
  
}

treeThings.depthFirstLog = function() {
  
}

var Node = function(value) {
  var node = {};
  node.value = value;
  node.left = null;
  node.right = null;
  return node;
}
/*
 * Complexity: What is the time complexity of the above functions?
 */


// class BinarySearchTree {
//   constructor {
//     this.value = value;
//   }
//   insert() {};
  
//   contains() {};
  
//   depthFirstLog() {};
  
// }