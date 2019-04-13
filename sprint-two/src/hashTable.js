

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {

  var index = getIndexBelowMaxForKey(k, this._limit);
  var hashTable = this._storage;

    if(Array.isArray(hashTable.get(index))) {
      for (var i =0; i < hashTable.get(index).length; i++){
        if(hashTable.get(index)[i][0] === k){
          hashTable.get(index)[i][1] = v;
        } else {
          hashTable.get(index).push([k, v]);
        }
      }
    } else {
      hashTable.set(index, [])
      hashTable.get(index).push([k, v]); 
    }
  };

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for(var i = 0; i < bucket.length; i++) {
    if( bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  
  for (i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


