db.classes.update({ avg_class_rating: 0 },{ $set:{ "deleted":false}}, false, true )