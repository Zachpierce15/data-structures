class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  	this.key = 0;
  }

  enqueue(value) {
   this.storage[this.key++] = value;
  }

  dequeue() {
  		var keys = Object.keys(this.storage);

  	var first = keys[0];

  	var firstValue = this.storage[first];

  	delete this.storage[first];
  	return firstValue;
  }

  size() {
  	  return Object.keys(this.storage).length;
  };
};


 
