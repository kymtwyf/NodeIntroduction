var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/NodeJsSession');

var schema = new mongoose.Schema({
  name:String,
  ISBN:String,
  price:Number,

  borrowerId:String,
  borrowDate:Date
})

schema.methods.borrow = function(id, date){
  this.borrowerId = id;
  this.borrowDate = date;
  this.save();
}
schema.methods.return = function(){
  this.borrowerId = null;
  this.borrowDate = null;
  this.save();
}

var Book = mongoose.model("Book",schema);

module.exports = Book;