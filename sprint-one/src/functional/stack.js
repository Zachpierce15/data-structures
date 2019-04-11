var Stack = function() {
  var i = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
   storage[value] = value
   var keys = Object.keys(storage)
   for (var i; i < keys; i ++) {
      storage[i] = value 
   }
   i += 1
  };

  someInstance.pop = function() {
   // create keys array
  var last; 
  for (var keys in storage) {
    last = storage[keys]
  }
  delete storage[last]
  return last
   
  };

  someInstance.size = function() {
   // 
    return Object.keys(storage).length
  };

  return someInstance;
};
