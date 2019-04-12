
var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  //debugger;
  Object.assign(newTree, treeMethods)
  newTree.children = [];  // fix me
  return newTree;
};

var treeMethods = {};
  
treeMethods.addChild = function(value) {
  var node = Tree(value);
  this.children.push(node);
};

treeMethods.contains = function(target) {
  debugger;
  // let boolean = false
  console.log("this", this.value)
  if (this.value === target) return true
  
  console.log(this.children.length)  
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  return false;
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
