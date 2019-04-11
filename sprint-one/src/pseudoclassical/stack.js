var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.key = 0;
};

Stack.prototype.push = function(value) {
	  this.storage[this.key++] = value
	};
Stack.prototype.pop = function() { 
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
Stack.prototype.size = function() {
	return this.key
}

