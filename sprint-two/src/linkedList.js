var LinkedList = function() {
  // debugger;
  var list = {};
  list.head = null;
  list.tail = null;
  
  list.addToTail = function(value) {
    let newNode = new Node(value);
    if (list.head === null) {
      list.head = newNode;
    }
    list.tail = newNode;
    list.head.next = newNode;
  };

  list.removeHead = function() {
    var former = list.head.value;
    list.head = list.head.next;
    return former;
  };

  list.contains = function(target) {
    var output = false;
    var recursion = function(node){
      if (node.value === target) {
        return output = true;
      }
      else if (node.next !== null) {
        recursion(node.next);
      }
    }
    recursion(list.head);
    return output;
  }
  return list;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
