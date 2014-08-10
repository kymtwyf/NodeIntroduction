var Book = require('./book.js');
/*
  mongo
  use _table
  show collections
  db.coll.find()
*/
new Book({
  name:"Essential C++",
  ISBN:"abcdefg",
  price:"12.3"
}).save();