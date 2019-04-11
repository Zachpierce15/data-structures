var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.key = 0
};
 
 Queue.prototype.dequeue = function() {
 	var keys = Object.keys(this.storage);

  	var first = keys[0]

  	var firstValue = this.storage[first]

  	delete this.storage[first]
  	return firstValue
  };

  Queue.prototype.enqueue = function(value) {
		this.storage[this.key++] = value 
	};

  Queue.prototype.size = function() {
  	   return Object.keys(this.storage).length
  }

