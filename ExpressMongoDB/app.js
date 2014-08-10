var http = require('http');
var express = require('express');
var util = require('util');
// var bodyParser = require('body-parser')

var app = express();
app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');

app.set('view engine', 'jade');

app.get('/',function(req,res){
  console.log('req '+ util.inspect(req.param('name')));
  // res.send({
  //   test:"hello"});
  res.render('home');
})

if ('development' == app.get('env')) {
  app.use(require('errorhandler'));
}

http.createServer(app).listen(3000,function(){
  console.log("listen on port 3000");
})

module.exports = app;