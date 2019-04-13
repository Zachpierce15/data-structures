var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  
  // your code here
  //debugger;
  Object.assign(newTree, treeThings)
  return newTree;
};

var treeThings = {};

treeThings.insert = function(number) {
 if (number >= this.value) {
  if(this.right === null){
    this.right = BinarySearchTree(number)
  }else{
    this.right.insert(number)
  } 
 }
  if (number < this.value) {
  if(this.left === null){
    this.left = BinarySearchTree(number)
  }else{
    this.left.insert(number)
  } 
 }
}

treeThings.contains = function(number) {
  // debugger;
  if (number === this.value) {
    return true;
  };
  if (number > this.value) {
    if (this.right === null) {
      return false;
    } else {
      return this.right.contains(number);  
    };
  } else if (number < this.value){
    if (this.left === null) {
      return false;
    } else {
      return this.left.contains(number)
    };
  }
};

treeThings.depthFirstLog = function(cb) {
  cb(this.value);
  if(this.left !== null) this.left.depthFirstLog(cb);
  if(this.right !== null) this.right.depthFirstLog(cb);
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