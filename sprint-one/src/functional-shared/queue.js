var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // create instance of an object 
  var instance = {
  	storage : {} ,
  	key: 0
  };
  _.extend(instance, queueMethods)
  return instance
};

var queueMethods = {

	enqueue : function(value){ 
		this.storage[this.key++] = value 
	} ,

  dequeue : function() {

  	var keys = Object.keys(this.storage);

  	var first = keys[0]

  	var firstValue = this.storage[first]

  	delete this.storage[first]

  	// if (this.key === 0) {
  		
  	// } else {
  	// 	this.key--
  	// }
  	return firstValue
	} ,

	      size : function () {
		return Object.keys(this.storage).length
}

}