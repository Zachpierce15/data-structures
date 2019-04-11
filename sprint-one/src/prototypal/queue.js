var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var instance = Object.create(queueMethods)
    instance.storage = {};
    instance.key = 0;
  return instance;
};

var queueMethods = {};

	

	queueMethods.dequeue = function() {
	  	var keys = Object.keys(this.storage);

  	var first = keys[0]

  	var firstValue = this.storage[first]

  	delete this.storage[first]
  	return firstValue
	};

	queueMethods.enqueue = function(value) {
		this.storage[this.key++] = value 
	};

	queueMethods.size = function() {
       return Object.keys(this.storage).length
	};

// 