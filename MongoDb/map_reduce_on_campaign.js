db.campaigns.mapReduce(function(){ emit(this._id, this.publishers);}, function(key, values){ print(Array); return Array.length;},{ query:{ user:ObjectId("5558ee440b60e9c01448e1ec"),status:'active'}, out: "publisherCounts"})