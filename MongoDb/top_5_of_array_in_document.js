db.studios.find({},{ _id:1, classes: { $slice : 2 } })