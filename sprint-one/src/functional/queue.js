var Queue = function() {
  var i = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
       storage[value] = value
   var keys = Object.keys(storage)
   for (var i; i < keys; i ++) {
      storage[i] = value 
   }
   i += 1
  };

  someInstance.dequeue = function() {
    var first;
    var keys = Object.keys(storage)
    first = keys[0]
    delete storage[first]
    return first
  };

  someInstance.size = function() {
    return Object.keys(storage).length
  };

  return someInstance;
};
