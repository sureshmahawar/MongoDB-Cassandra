db.classes.mapReduce(function(){ emit(this._id, this.inventory);}, function(key, values){ return Array.sum(values);},{ query:{deleted:true}, out: "DisabledStudios"})