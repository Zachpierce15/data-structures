class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  	this.key = 0;
  }
  
  push(value) {
	  this.storage[this.key++] = value
	};
  pop() { 
 	  	var arrOfKeys = Object.keys(this.storage);

 	  	var lastItem = arrOfKeys[arrOfKeys.length - 1]

 	  	var lastValue = this.storage[lastItem]
 	  	
 	  	delete this.storage[lastItem]

 	  	if (this.key === 0) {
 	  		this.key
 	  	} else {
 	  		this.key--
 	  	}
 	  	return lastValue
		};
  size() {
	return this.key
}
}