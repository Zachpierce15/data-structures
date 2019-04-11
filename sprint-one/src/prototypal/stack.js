var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
   var instance = Object.create(stackMethods)
    instance.storage = {};
    instance.key = 0;
  return instance;
};

var stackMethods = {};

 stackMethods.push = function(value) {
	  this.storage[this.key++] = value
	};

 stackMethods.pop = function() { 
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
		} 

stackMethods.size = function() {
	return this.key
}


